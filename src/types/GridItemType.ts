export type GridItemType = {
    item: number | null; // identificar a posição da carta pela posiçao delas em items.ts
    show: boolean; // se a carta está sendo exibida ou não
    permanentShow: boolean; // quando a carta está virada de forma permanente
}