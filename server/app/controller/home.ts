import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    await this.ctx.render('home/index.tpl', { text: 'hi, world'});
  }
}
