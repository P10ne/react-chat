const {BaseRouter} = require("./BaseRouter");
const {getListRequest} = require('../controllers/chatsController');

class ChatsRouter extends BaseRouter {
  constructor() {
    super();
  }
  init() {
    this.router.post('/', getListRequest);
  }
}

const chatsRouter = new ChatsRouter();

module.exports = chatsRouter.router;
