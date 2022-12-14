import { createGlobalStyle } from "styled-components";
import Pokemon from './assets/fonts/PokemonSolid.ttf'

export const GlobalStyled = createGlobalStyle`

@font-face{
  font-family: 'Pokemon';
  src: url(${Pokemon}) format('opentype');
  font-weight: normal;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Oxanium', cursive;
}

html{
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background-color: #fff;
}

::-webkit-scrollbar-thumb {
  background: #000;
}

.App {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh + 10rem);
  background: radial-gradient(circle, #3c1053 0%, #362669 55%);
}

.animate{
    opacity: 0;
    transform: translateX(-20px);
    animation: animate .3s forwards;

    @keyframes animate{
        to{
            opacity: 1;
            transform: initial;
        }
    }
}

/* Types */

.bug {
    background: #7bcf00;
    background-image: url(../../assets/iconTypes/bug.svg);
    background-repeat: no-repeat;
    background-position: 5px;
}

.dark {
    background: #5a566a;
    background-image: url(../../assets/iconTypes/dark.svg);
    background-repeat: no-repeat;
    background-position: 5px;
}

.dragon {
    background: #0076ff;
    background-image: url(../../assets/iconTypes/dragon.svg);
    background-repeat: no-repeat;
    background-position: 5px;
}

.electric {
    background: #ffde00;
    background-image: url(../../assets/iconTypes/electric.svg);
    background-repeat: no-repeat;
    background-position: 5px;
}

.fairy {
    background: #ff76ff;
    background-image: url(../../assets/iconTypes/fairy.svg);
    background-repeat: no-repeat;
    background-position: 5px;
}

.fighting {
    background: #ff215b;
    background-image: url(../../assets/iconTypes/fighting.svg);
    background-repeat: no-repeat;
    background-position: 5px;
}

.fire {
    background: #ff9900;
    background-image: url(../../assets/iconTypes/fire.svg);
    background-repeat: no-repeat;
    background-position: 5px;
}

.flying {
    background: #89bdff;
    background-image: url(../../assets/iconTypes/flying.svg);
    background-repeat: no-repeat;
    background-position: 5px;
}

.ghost {
    background: #4e6aff;
    background-image: url(../../assets/iconTypes/ghost.svg);
    background-repeat: no-repeat;
    background-position: 5px;
}

.grass {
    background: #1cd80e;
    background-image: url(../../assets/iconTypes/grass.svg);
    background-repeat: no-repeat;
    background-position: 5px;
}

.ground {
    background: #ff6b0d;
    background-image: url(../../assets/iconTypes/ground.svg);
    background-repeat: no-repeat;
    background-position: 5px;
}

.ice {
    background: #2ee4c6;
    background-image: url(../../assets/iconTypes/ice.svg);
    background-repeat: no-repeat;
    background-position: 5px;
}

.normal {
    background: #9fa39d;
    background-image: url(../../assets/iconTypes/normal.svg);
    background-repeat: no-repeat;
    background-position: 5px;
}

.poison {
    background: #f149ff;
    background-image: url(../../assets/iconTypes/poison.svg);
    background-repeat: no-repeat;
    background-position: 5px;
}

.psychic {
    background: #ff6c64;
    background-image: url(../../assets/iconTypes/psychic.svg);
    background-repeat: no-repeat;
    background-position: 5px;
}

.rock {
    background: #d8bc5a;
    background-image: url(../../assets/iconTypes/rock.svg);
    background-repeat: no-repeat;
    background-position: 5px;
}

.steel {
    background: #23a1bd;
    background-image: url(../../assets/iconTypes/steel.svg);
    background-repeat: no-repeat;
    background-position: 5px;
}

.water {
    background: #14a8ff;
    background-image: url(../../assets/iconTypes/water.svg);
    background-repeat: no-repeat;
    background-position: 5px;
}

.cardbug {
    background: #7bcf00;
    background: radial-gradient(circle, #7bcf00 -90%, #1b1b1b 55%);
}

.carddark {
    background: #5a566a;
    background: radial-gradient(circle, #5a566a -90%, #1b1b1b 55%);
}

.carddragon {
    background: #0076ff;
    background: radial-gradient(circle, #0076ff -90%, #1b1b1b 55%);
}

.cardelectric {
    background: #ffde00;
    background: radial-gradient(circle, #ffde00 -90%, #1b1b1b 55%);
}

.cardfairy {
    background: #ff76ff;
    background: radial-gradient(circle, #ff76ff -90%, #1b1b1b 55%);
}

.cardfighting {
    background: #ff215b;
    background: radial-gradient(circle, #ff215b -90%, #1b1b1b 55%);
}

.cardfire {
    background: #ff9900;
    background: radial-gradient(circle, #ff9900 -90%, #1b1b1b 55%);
}

.cardflying {
    background: #89bdff;
    background: radial-gradient(circle, #89bdff -90%, #1b1b1b 55%);
}

.cardghost {
    background: #4e6aff;
    background: radial-gradient(circle, #4e6aff -90%, #1b1b1b 55%);
}

.cardgrass {
    background: #1cd80e;
    background: radial-gradient(circle, #1cd80e -90%, #1b1b1b 55%);
}

.cardground {
    background: #ff6b0d;
    background: radial-gradient(circle, #ff6b0d -90%, #1b1b1b 55%);
}

.cardice {
    background: #2ee4c6;
    background: radial-gradient(circle, #2ee4c6 -90%, #1b1b1b 55%);
}

.cardnormal {
    background: #9fa39d;
    background: radial-gradient(circle, #9fa39d -90%, #1b1b1b 55%);
}

.cardpoison {
    background: #f149ff;
    background: radial-gradient(circle, #f149ff -90%, #1b1b1b 55%);
}

.cardpsychic {
    background: #ff6c64;
    background: radial-gradient(circle, #ff6c64 -90%, #1b1b1b 55%);
}

.cardrock {
    background: #d8bc5a;
    background: radial-gradient(circle, #d8bc5a -90%, #1b1b1b 55%);
}

.cardsteel {
    background: #23a1bd;
    background: radial-gradient(circle, #23a1bd -90%, #1b1b1b 55%);
}

.cardwater {
    background: #14a8ff;
    background: radial-gradient(circle, #14a8ff -90%, #1b1b1b 55%);
}
`