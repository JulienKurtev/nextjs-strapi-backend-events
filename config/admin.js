module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '36b1ed50373964e9866229915b553b80'),
  },
});
