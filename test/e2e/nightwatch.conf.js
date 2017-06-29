module.exports = {
  "src_folders" : ["test/e2e/specs"],
  "output_folder" : "test/e2e/reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "",
  "globals_path" : "",

  "selenium" : {
    "start_process" : true,
    server_path: require('selenium-server').path,
    host: '127.0.0.1',
    "port" : 4444,
    "cli_args" : {
      'webdriver.chrome.driver': require('chromedriver').path
    }
  },

  "test_settings" : {
    "default" : {
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      globals: {
        devServerURL: 'http://localhost:3000'
      }
    },
    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}
