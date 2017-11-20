import * as b from 'bobril';
import * as styles from '../styles';
import * as Colors from '../../components/colors';
import * as About from './sections/about';
import * as LCenter from '../../components/lCenter/lib';

import * as Intro from '../introPage/sections/intro';
interface IData {}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

const home = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv(Intro.create(), bobrilPromoStyle),
           LCenter.create({
               children: [About.create()],
               maxWidth: styles.maxPageWidth,
           })
        ];
    }
});

const imageContainerPadding = 42;
const bobrilPromoStyle = b.styleDef({
    position: 'relative',
    textAlign: 'center',
    height: 'calc(100vh - 60px)',
    minHeight: '700px',
    marginTop: -imageContainerPadding,
    marginLeft: -imageContainerPadding,
    marginRight: -imageContainerPadding,
    paddingTop: imageContainerPadding,
    paddingLeft: imageContainerPadding,
    paddingRight: imageContainerPadding
});

export default home;
