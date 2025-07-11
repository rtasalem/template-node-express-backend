const serverConfig = {
  server: {
    env: {
      doc: 'The application environment.',
      format: ['production', 'development', 'test'],
      default: 'development',
      env: 'NODE_ENV'
    },
    isDev: {
      doc: 'True if the application is in development mode.',
      format: Boolean,
      default: process.env.NODE_ENV === 'development'
    },
    host: {
      doc: 'The host to bind.',
      format: 'ipaddress',
      default: '0.0.0.0',
      env: 'HOST'
    },
    port: {
      doc: 'The port to bind.',
      format: 'port',
      default: 3000,
      env: 'PORT',
      arg: 'port'
    }
  }
}

export default serverConfig
