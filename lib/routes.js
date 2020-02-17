'use strict';

function indexPage (request,response) {
  response.render('./index')
}

module.exports = {
  indexPage
};
