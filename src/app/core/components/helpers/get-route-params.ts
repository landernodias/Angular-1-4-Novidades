import { inject } from "@angular/core"
import { ActivatedRoute } from "@angular/router"

//possibilita o reuso não necessitando instanciar em varios construtores o ActivatedRoute
export const getRouteParams = (key: string) => {
  return inject(ActivatedRoute).snapshot.params[key];
};
