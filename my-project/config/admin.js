module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6b4e01a27fe725740093a8cccfbc175d'),
  },
});
