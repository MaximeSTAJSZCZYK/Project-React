module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '16f7a20fc3c182421164dcdab4d8df73'),
  },
});
