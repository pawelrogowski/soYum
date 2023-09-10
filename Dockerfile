FROM oven/bun
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install
COPY . .
RUN bunx --bun vite build

FROM oven/bun
WORKDIR /app
RUN bun add serve
COPY --from=0 /app/dist ./
EXPOSE 5000
CMD ["serve", "-s", ".", "-l", "5000"]
