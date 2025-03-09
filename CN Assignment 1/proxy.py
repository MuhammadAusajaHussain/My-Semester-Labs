import socket
import sys
import multiprocessing


MAX_CONNECTIONS = 100
BUFFER_SIZE = 4096

def receive_request(client_socket):
    """Receives the client request and returns it as a decoded string."""
    try:
        request_data = client_socket.recv(BUFFER_SIZE).decode()
        return request_data if request_data else None
    except Exception as err:
        print(f"[Error receiving request] {err}")
        return None

def parse_request(request_data):
    """Parses the HTTP request and extracts method, host, port, and resource path."""
    try:
        request_lines = request_data.split("\r\n")
        request_line = request_lines[0].split()
        
        if len(request_line) != 3:
            return None, None, None, None, "HTTP/1.0 400 Bad Request\r\n\r\n"
        
        method, full_url, http_version = request_line
        
        if method != "GET":
            return None, None, None, None, "HTTP/1.0 501 Not Implemented\r\n\r\n"
        
        if full_url.startswith("http://"):
            full_url = full_url[7:]
        
        host_part, _, resource_path = full_url.partition("/")
        resource_path = "/" + resource_path if resource_path else "/"
        
        if ":" in host_part:
            host, port = host_part.split(":")
            port = int(port)
        else:
            host, port = host_part, 80
        
        return method, host, port, resource_path, None
    except Exception as err:
        print(f"[Error parsing request] {err}")
        return None, None, None, None, "HTTP/1.0 400 Bad Request\r\n\r\n"

def forward_request(host, port, resource_path, request_lines, client_socket):
    """Forwards the client request to the remote server and sends back the response."""
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as server_socket:
            server_socket.connect((host, port))
            request_to_server = f"GET {resource_path} HTTP/1.0\r\n"
            request_to_server += "\r\n".join(request_lines[1:]) + "\r\n\r\n"
            server_socket.send(request_to_server.encode())
            
            while True:
                response = server_socket.recv(BUFFER_SIZE)
                if not response:
                    break
                client_socket.send(response)
    except Exception as err:
        print(f"[Error forwarding request] {err}")
    finally:
        client_socket.close()

def process_client(client_socket):
    """Handles the client request by receiving, parsing, and forwarding it."""
    request_data = receive_request(client_socket)
    if not request_data:
        client_socket.close()
        return
    
    method, host, port, resource_path, error_response = parse_request(request_data)
    if error_response:
        client_socket.send(error_response.encode())
        client_socket.close()
        return
    
    forward_request(host, port, resource_path, request_data.split("\r\n"), client_socket)

def start_proxy(port):
    """Initializes the proxy server, listens for client connections, and handles requests."""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as proxy_socket:
        proxy_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        proxy_socket.bind(("0.0.0.0", port))
        proxy_socket.listen(MAX_CONNECTIONS)
        print(f"Proxy server running on port {port}...")
        
        while True:
            client_socket, client_addr = proxy_socket.accept()
            print(f"New connection from {client_addr}")
            process = multiprocessing.Process(target=process_client, args=(client_socket,))
            process.start()
            client_socket.close()

if __name__ == "__main__":
    print("Name: Ausaja")
    print("Roll Number: 22K-5186")
    print("Section: BSE-6B\n\n")

    if len(sys.argv) != 2:
        print(f"Usage: {sys.argv[0]} <port>")
        sys.exit(1)
    proxy_port = int(sys.argv[1])
    start_proxy(proxy_port)
