import * as b from 'bobril';
import { paragtext01 } from '../styles';

export const rowLabel: b.IBobrilStyleDef = b.styleDef({
    cssFloat: 'left',
    width: '240px',
    paddingLeft: 80,
    paddingTop: 7.5
});

export const rowContent: b.IBobrilStyleDef = b.styleDef({
    paddingTop: 8,
    fontFamily: 'Segoe UI',
    letterSpacing: '0px',
});

export const rowStyle: b.IBobrilStyleDef = b.styleDef({
    width: '720px',
    height: '40px',
    background: '#65697A',
});
