class RestfulAPI {
  constructor(resourceName, app, model, association) {
    this.resource = resourceName;
    this.app = app;
    this.model = model;
    this.association = association;
  }

  findAll() {
    this.app.get(`/api/${this.resource}`, (req, res) => {
      this.model.findAll({
        include: [{
          model: this.association,
          // where: {
          //   id: this.model.UserId
          // }
        }]
      })
        .then(function (data) {
          res.json(data);
        })
        .catch(function (err) {
          res.json(err);
        })
    })
  }

  create() {
    this.app.post(`/api/${this.resource}`, (req, res) => {
      this.model.create(req.body)
        .then(function (data) {
          res.json(data);
        })
        .catch(function (err) {
          res.json(err);
        })
    })
  }

  find(identifier) {
    this.app.get(`/api/${this.resource}/:${identifier}`, (req, res) => {
      this.model.findAll({
        where: {
          [identifier]: req.params[identifier]
        },
        include: [{
          model: this.association,
          // where: {
          //   id: this.model.UserId
          // }
        }]
      })
        .then(function (data) {
          console.log('1,2,3');
          console.log(data);
          res.json(data);
        })
        .catch(function (err) {
          res.json(err);
        })
    })
  }

  delete(identifier) {
    this.app.delete(`/api/${this.resource}/:${identifier}`, (req, res) => {
      this.model.destroy({
        where: {
          [identifier]: req.params[identifier]
        }
      })
        .then(function (data) {
          res.json(data);
        })
        .catch(function (err) {
          res.json(err);
        })
    })
  }

  update(identifier) {
    this.app.put(`/api/${this.resource}/:${identifier}`, (req, res) => {
      this.model.update(
        req.body,
        {
          where: {
            [identifier]: req.params[identifier]
          }
        })
        .then(function (data) {
          res.json(data);
        })
        .catch(function (err) {
          res.json(err);
        })
    })
  }
}

module.exports = RestfulAPI;