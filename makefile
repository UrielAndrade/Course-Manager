

up:
	@podman-compose down  
	@podman-compose up -d
	@bun run start:dev
down:
	@podman-compose down



