module.exports = {
  apps: [
    {
      name: "NestJS",
      script: "dist/main.js",
      instances: "max",
      autorestart: true,
      watch: false,
    },
  ],
};
