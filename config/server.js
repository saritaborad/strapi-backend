module.exports = ({ env }) => ({
  host: env("HOST", "127.0.0.1"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});

module.exports = ({ env }) => ({
  proxy: true,
  url: env("HOST_URL"), // Sets the public URL of the application.
  app: {
    keys: env.array("APP_KEYS"),
  },
});
