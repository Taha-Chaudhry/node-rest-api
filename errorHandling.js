const errors = [
    {
      "code": 1,
      "message": "Body not found"
    },
    {
      "code": 2,
      "message": "Insufficient body format"
    }]
  
  module.exports = {
    raiseError: function(code, res) {
      for (const error of errors) {
        if (error.code == code) {
          res.end(JSON.stringify(error, null, "\t"));
        }
      }
    }
  }