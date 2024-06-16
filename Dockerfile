# 使用官方Node.js运行时作为父镜像
FROM node:18
LABEL authors="Mars"

# 设置工作目录
WORKDIR /app

# 将package.json和package-lock.json文件复制到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目文件到工作目录
COPY . .

# 构建Vue项目
RUN npm run build

# 配置Web服务器，这里使用nginx作为示例
# 你可以使用其他Web服务器，如apache
FROM nginx:1.21

# 复制nginx配置文件
COPY nginx.conf /etc/nginx/nginx.conf

# 复制Vue项目构建产物到Web服务器的公共目录
COPY --from=0 /app/dist /usr/share/nginx/html

# 暴露80端口供外部访问
EXPOSE 80

# 启动nginx服务
CMD ["nginx", "-g", "daemon off;"]