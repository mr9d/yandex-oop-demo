class TodoListItem {

  static _template = document.querySelector('#todolist-item-template').content;

  constructor(text, addItem) {
    this._text = text;
    this._addItem = addItem;
  }

  _delClickHandler = () => {
    this._view.remove();
  }

  _copyClickHandler = () => {
    this._addItem(this._text);
  }

  render = (container) => {
    this._view = TodoListItem._template.cloneNode(true).children[0];
    this._view.querySelector('.todolist-item__text').textContent = this._text;
    this._view.querySelector('.todolist-item__del').addEventListener('click', this._delClickHandler);
    this._view.querySelector('.todolist-item__copy').addEventListener('click', this._copyClickHandler);
    container.append(this._view);
  }

}
