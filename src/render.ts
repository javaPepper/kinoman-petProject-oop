import AbstractView from "./framework/view/abstract-view";

const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

const createElement = (template: string) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstElementChild;
};

const render = (component: AbstractView, container: HTMLElement, place = RenderPosition.BEFOREEND) => {
  container.insertAdjacentElement(place as InsertPosition, component.element as unknown as Element);
};

export {RenderPosition, createElement, render};
