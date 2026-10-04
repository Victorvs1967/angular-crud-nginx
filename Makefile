build:
	docker build -t angular-crud .

run:
	docker run -d -p 80:80 --name angular-crud angular-crud

server:
	npx json-server --watch src/assets/products.json --port 3000