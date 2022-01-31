import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }

	* {
		box-sizing: border-box;
		&::after, &::before {
			box-sizing: inherit;
		}
	}

	[data-countrycode="ac"] {
		height: 10px;
		background-position: 0px 0px;
	}
	[data-countrycode="ad"] {
		height: 14px;
		background-position: -22px 0px;
	}
	[data-countrycode="ae"] {
		height: 10px;
		background-position: -44px 0px;
	}
	[data-countrycode="af"] {
		height: 14px;
		background-position: -66px 0px;
	}
	[data-countrycode="ag"] {
		height: 14px;
		background-position: -88px 0px;
	}
	[data-countrycode="ai"] {
		height: 10px;
		background-position: -110px 0px;
	}
	[data-countrycode="al"] {
		height: 15px;
		background-position: -132px 0px;
	}
	[data-countrycode="am"] {
		height: 10px;
		background-position: -154px 0px;
	}
	[data-countrycode="ao"] {
		height: 14px;
		background-position: -176px 0px;
	}
	[data-countrycode="aq"] {
		height: 14px;
		background-position: -198px 0px;
	}
	[data-countrycode="ar"] {
		height: 13px;
		background-position: -220px 0px;
	}
	[data-countrycode="as"] {
		height: 10px;
		background-position: -242px 0px;
	}
	[data-countrycode="at"] {
		height: 14px;
		background-position: -264px 0px;
	}
	[data-countrycode="au"] {
		height: 10px;
		background-position: -286px 0px;
	}
	[data-countrycode="aw"] {
		height: 14px;
		background-position: -308px 0px;
	}
	[data-countrycode="ax"] {
		height: 13px;
		background-position: -330px 0px;
	}
	[data-countrycode="az"] {
		height: 10px;
		background-position: -352px 0px;
	}
	[data-countrycode="ba"] {
		height: 10px;
		background-position: -374px 0px;
	}
	[data-countrycode="bb"] {
		height: 14px;
		background-position: -396px 0px;
	}
	[data-countrycode="bd"] {
		height: 12px;
		background-position: -418px 0px;
	}
	[data-countrycode="be"] {
		height: 15px;
		background-position: -440px 0px;
		width: 18px;
	}
	[data-countrycode="bf"] {
		height: 14px;
		background-position: -460px 0px;
	}
	[data-countrycode="bg"] {
		height: 12px;
		background-position: -482px 0px;
	}
	[data-countrycode="bh"] {
		height: 12px;
		background-position: -504px 0px;
	}
	[data-countrycode="bi"] {
		height: 12px;
		background-position: -526px 0px;
	}
	[data-countrycode="bj"] {
		height: 14px;
		background-position: -548px 0px;
	}
	[data-countrycode="bl"] {
		height: 14px;
		background-position: -570px 0px;
	}
	[data-countrycode="bm"] {
		height: 10px;
		background-position: -592px 0px;
	}
	[data-countrycode="bn"] {
		height: 10px;
		background-position: -614px 0px;
	}
	[data-countrycode="bo"] {
		height: 14px;
		background-position: -636px 0px;
	}
	[data-countrycode="bq"] {
		height: 14px;
		background-position: -658px 0px;
	}
	[data-countrycode="br"] {
		height: 14px;
		background-position: -680px 0px;
	}
	[data-countrycode="bs"] {
		height: 10px;
		background-position: -702px 0px;
	}
	[data-countrycode="bt"] {
		height: 14px;
		background-position: -724px 0px;
	}
	[data-countrycode="bv"] {
		height: 15px;
		background-position: -746px 0px;
	}
	[data-countrycode="bw"] {
		height: 14px;
		background-position: -768px 0px;
	}
	[data-countrycode="by"] {
		height: 10px;
		background-position: -790px 0px;
	}
	[data-countrycode="bz"] {
		height: 14px;
		background-position: -812px 0px;
	}
	[data-countrycode="ca"] {
		height: 10px;
		background-position: -834px 0px;
	}
	[data-countrycode="cc"] {
		height: 10px;
		background-position: -856px 0px;
	}
	[data-countrycode="cd"] {
		height: 15px;
		background-position: -878px 0px;
	}
	[data-countrycode="cf"] {
		height: 14px;
		background-position: -900px 0px;
	}
	[data-countrycode="cg"] {
		height: 14px;
		background-position: -922px 0px;
	}
	[data-countrycode="ch"] {
		width: 15px;
		height: 15px;
		background-position: -944px 0px;
	}
	[data-countrycode="ci"] {
		height: 14px;
		background-position: -961px 0px;
	}
	[data-countrycode="ck"] {
		height: 10px;
		background-position: -983px 0px;
	}
	[data-countrycode="cl"] {
		height: 14px;
		background-position: -1005px 0px;
	}
	[data-countrycode="cm"] {
		height: 14px;
		background-position: -1027px 0px;
	}
	[data-countrycode="cn"] {
		height: 14px;
		background-position: -1049px 0px;
	}
	[data-countrycode="co"] {
		height: 14px;
		background-position: -1071px 0px;
	}
	[data-countrycode="cp"] {
		height: 14px;
		background-position: -1093px 0px;
	}
	[data-countrycode="cr"] {
		height: 12px;
		background-position: -1115px 0px;
	}
	[data-countrycode="cu"] {
		height: 10px;
		background-position: -1137px 0px;
	}
	[data-countrycode="cv"] {
		height: 12px;
		background-position: -1159px 0px;
	}
	[data-countrycode="cw"] {
		height: 14px;
		background-position: -1181px 0px;
	}
	[data-countrycode="cx"] {
		height: 10px;
		background-position: -1203px 0px;
	}
	[data-countrycode="cy"] {
		height: 13px;
		background-position: -1225px 0px;
	}
	[data-countrycode="cz"] {
		height: 14px;
		background-position: -1247px 0px;
	}
	[data-countrycode="de"] {
		height: 12px;
		background-position: -1269px 0px;
	}
	[data-countrycode="dg"] {
		height: 10px;
		background-position: -1291px 0px;
	}
	[data-countrycode="dj"] {
		height: 14px;
		background-position: -1313px 0px;
	}
	[data-countrycode="dk"] {
		height: 15px;
		background-position: -1335px 0px;
	}
	[data-countrycode="dm"] {
		height: 10px;
		background-position: -1357px 0px;
	}
	[data-countrycode="do"] {
		height: 13px;
		background-position: -1379px 0px;
	}
	[data-countrycode="dz"] {
		height: 14px;
		background-position: -1401px 0px;
	}
	[data-countrycode="ea"] {
		height: 14px;
		background-position: -1423px 0px;
	}
	[data-countrycode="ec"] {
		height: 14px;
		background-position: -1445px 0px;
	}
	[data-countrycode="ee"] {
		height: 13px;
		background-position: -1467px 0px;
	}
	[data-countrycode="eg"] {
		height: 14px;
		background-position: -1489px 0px;
	}
	[data-countrycode="eh"] {
		height: 10px;
		background-position: -1511px 0px;
	}
	[data-countrycode="er"] {
		height: 10px;
		background-position: -1533px 0px;
	}
	[data-countrycode="es"] {
		height: 14px;
		background-position: -1555px 0px;
	}
	[data-countrycode="et"] {
		height: 10px;
		background-position: -1577px 0px;
	}
	[data-countrycode="eu"] {
		height: 14px;
		background-position: -1599px 0px;
	}
	[data-countrycode="fi"] {
		height: 12px;
		background-position: -1621px 0px;
	}
	[data-countrycode="fj"] {
		height: 10px;
		background-position: -1643px 0px;
	}
	[data-countrycode="fk"] {
		height: 10px;
		background-position: -1665px 0px;
	}
	[data-countrycode="fm"] {
		height: 11px;
		background-position: -1687px 0px;
	}
	[data-countrycode="fo"] {
		height: 15px;
		background-position: -1709px 0px;
	}
	[data-countrycode="fr"] {
		height: 14px;
		background-position: -1731px 0px;
	}
	[data-countrycode="ga"] {
		height: 15px;
		background-position: -1753px 0px;
	}
	[data-countrycode="gb"] {
		height: 10px;
		background-position: -1775px 0px;
	}
	[data-countrycode="gd"] {
		height: 12px;
		background-position: -1797px 0px;
	}
	[data-countrycode="ge"] {
		height: 14px;
		background-position: -1819px 0px;
	}
	[data-countrycode="gf"] {
		height: 14px;
		background-position: -1841px 0px;
	}
	[data-countrycode="gg"] {
		height: 14px;
		background-position: -1863px 0px;
	}
	[data-countrycode="gh"] {
		height: 14px;
		background-position: -1885px 0px;
	}
	[data-countrycode="gi"] {
		height: 10px;
		background-position: -1907px 0px;
	}
	[data-countrycode="gl"] {
		height: 14px;
		background-position: -1929px 0px;
	}
	[data-countrycode="gm"] {
		height: 14px;
		background-position: -1951px 0px;
	}
	[data-countrycode="gn"] {
		height: 14px;
		background-position: -1973px 0px;
	}
	[data-countrycode="gp"] {
		height: 14px;
		background-position: -1995px 0px;
	}
	[data-countrycode="gq"] {
		height: 14px;
		background-position: -2017px 0px;
	}
	[data-countrycode="gr"] {
		height: 14px;
		background-position: -2039px 0px;
	}
	[data-countrycode="gs"] {
		height: 10px;
		background-position: -2061px 0px;
	}
	[data-countrycode="gt"] {
		height: 13px;
		background-position: -2083px 0px;
	}
	[data-countrycode="gu"] {
		height: 11px;
		background-position: -2105px 0px;
	}
	[data-countrycode="gw"] {
		height: 10px;
		background-position: -2127px 0px;
	}
	[data-countrycode="gy"] {
		height: 12px;
		background-position: -2149px 0px;
	}
	[data-countrycode="hk"] {
		height: 14px;
		background-position: -2171px 0px;
	}
	[data-countrycode="hm"] {
		height: 10px;
		background-position: -2193px 0px;
	}
	[data-countrycode="hn"] {
		height: 10px;
		background-position: -2215px 0px;
	}
	[data-countrycode="hr"] {
		height: 10px;
		background-position: -2237px 0px;
	}
	[data-countrycode="ht"] {
		height: 12px;
		background-position: -2259px 0px;
	}
	[data-countrycode="hu"] {
		height: 10px;
		background-position: -2281px 0px;
	}
	[data-countrycode="ic"] {
		height: 14px;
		background-position: -2303px 0px;
	}
	[data-countrycode="id"] {
		height: 14px;
		background-position: -2325px 0px;
	}
	[data-countrycode="ie"] {
		height: 10px;
		background-position: -2347px 0px;
	}
	[data-countrycode="il"] {
		height: 15px;
		background-position: -2369px 0px;
	}
	[data-countrycode="im"] {
		height: 10px;
		background-position: -2391px 0px;
	}
	[data-countrycode="in"] {
		height: 14px;
		background-position: -2413px 0px;
	}
	[data-countrycode="io"] {
		height: 10px;
		background-position: -2435px 0px;
	}
	[data-countrycode="iq"] {
		height: 14px;
		background-position: -2457px 0px;
	}
	[data-countrycode="ir"] {
		height: 12px;
		background-position: -2479px 0px;
	}
	[data-countrycode="is"] {
		height: 15px;
		background-position: -2501px 0px;
	}
	[data-countrycode="it"] {
		height: 14px;
		background-position: -2523px 0px;
	}
	[data-countrycode="je"] {
		height: 12px;
		background-position: -2545px 0px;
	}
	[data-countrycode="jm"] {
		height: 10px;
		background-position: -2567px 0px;
	}
	[data-countrycode="jo"] {
		height: 10px;
		background-position: -2589px 0px;
	}
	[data-countrycode="jp"] {
		height: 14px;
		background-position: -2611px 0px;
	}
	[data-countrycode="ke"] {
		height: 14px;
		background-position: -2633px 0px;
	}
	[data-countrycode="kg"] {
		height: 12px;
		background-position: -2655px 0px;
	}
	[data-countrycode="kh"] {
		height: 13px;
		background-position: -2677px 0px;
	}
	[data-countrycode="ki"] {
		height: 10px;
		background-position: -2699px 0px;
	}
	[data-countrycode="km"] {
		height: 12px;
		background-position: -2721px 0px;
	}
	[data-countrycode="kn"] {
		height: 14px;
		background-position: -2743px 0px;
	}
	[data-countrycode="kp"] {
		height: 10px;
		background-position: -2765px 0px;
	}
	[data-countrycode="kr"] {
		height: 14px;
		background-position: -2787px 0px;
	}
	[data-countrycode="kw"] {
		height: 10px;
		background-position: -2809px 0px;
	}
	[data-countrycode="ky"] {
		height: 10px;
		background-position: -2831px 0px;
	}
	[data-countrycode="kz"] {
		height: 10px;
		background-position: -2853px 0px;
	}
	[data-countrycode="la"] {
		height: 14px;
		background-position: -2875px 0px;
	}
	[data-countrycode="lb"] {
		height: 14px;
		background-position: -2897px 0px;
	}
	[data-countrycode="lc"] {
		height: 10px;
		background-position: -2919px 0px;
	}
	[data-countrycode="li"] {
		height: 12px;
		background-position: -2941px 0px;
	}
	[data-countrycode="lk"] {
		height: 10px;
		background-position: -2963px 0px;
	}
	[data-countrycode="lr"] {
		height: 11px;
		background-position: -2985px 0px;
	}
	[data-countrycode="ls"] {
		height: 14px;
		background-position: -3007px 0px;
	}
	[data-countrycode="lt"] {
		height: 12px;
		background-position: -3029px 0px;
	}
	[data-countrycode="lu"] {
		height: 12px;
		background-position: -3051px 0px;
	}
	[data-countrycode="lv"] {
		height: 10px;
		background-position: -3073px 0px;
	}
	[data-countrycode="ly"] {
		height: 10px;
		background-position: -3095px 0px;
	}
	[data-countrycode="ma"] {
		height: 14px;
		background-position: -3117px 0px;
	}
	[data-countrycode="mc"] {
		width: 19px;
		height: 15px;
		background-position: -3139px 0px;
	}
	[data-countrycode="md"] {
		height: 10px;
		background-position: -3160px 0px;
	}
	[data-countrycode="me"] {
		height: 10px;
		background-position: -3182px 0px;
	}
	[data-countrycode="mf"] {
		height: 14px;
		background-position: -3204px 0px;
	}
	[data-countrycode="mg"] {
		height: 14px;
		background-position: -3226px 0px;
	}
	[data-countrycode="mh"] {
		height: 11px;
		background-position: -3248px 0px;
	}
	[data-countrycode="mk"] {
		height: 10px;
		background-position: -3270px 0px;
	}
	[data-countrycode="ml"] {
		height: 14px;
		background-position: -3292px 0px;
	}
	[data-countrycode="mm"] {
		height: 14px;
		background-position: -3314px 0px;
	}
	[data-countrycode="mn"] {
		height: 10px;
		background-position: -3336px 0px;
	}
	[data-countrycode="mo"] {
		height: 14px;
		background-position: -3358px 0px;
	}
	[data-countrycode="mp"] {
		height: 10px;
		background-position: -3380px 0px;
	}
	[data-countrycode="mq"] {
		height: 14px;
		background-position: -3402px 0px;
	}
	[data-countrycode="mr"] {
		height: 14px;
		background-position: -3424px 0px;
	}
	[data-countrycode="ms"] {
		height: 10px;
		background-position: -3446px 0px;
	}
	[data-countrycode="mt"] {
		height: 14px;
		background-position: -3468px 0px;
	}
	[data-countrycode="mu"] {
		height: 14px;
		background-position: -3490px 0px;
	}
	[data-countrycode="mv"] {
		height: 14px;
		background-position: -3512px 0px;
	}
	[data-countrycode="mw"] {
		height: 14px;
		background-position: -3534px 0px;
	}
	[data-countrycode="mx"] {
		height: 12px;
		background-position: -3556px 0px;
	}
	[data-countrycode="my"] {
		height: 10px;
		background-position: -3578px 0px;
	}
	[data-countrycode="mz"] {
		height: 14px;
		background-position: -3600px 0px;
	}
	[data-countrycode="na"] {
		height: 14px;
		background-position: -3622px 0px;
	}
	[data-countrycode="nc"] {
		height: 10px;
		background-position: -3644px 0px;
	}
	[data-countrycode="ne"] {
		width: 18px;
		height: 15px;
		background-position: -3666px 0px;
	}
	[data-countrycode="nf"] {
		height: 10px;
		background-position: -3686px 0px;
	}
	[data-countrycode="ng"] {
		height: 10px;
		background-position: -3708px 0px;
	}
	[data-countrycode="ni"] {
		height: 12px;
		background-position: -3730px 0px;
	}
	[data-countrycode="nl"] {
		height: 14px;
		background-position: -3752px 0px;
	}
	[data-countrycode="no"] {
		height: 15px;
		background-position: -3774px 0px;
	}
	[data-countrycode="np"] {
		width: 13px;
		height: 15px;
		background-position: -3796px 0px;
		background-color: transparent;
	}
	[data-countrycode="nr"] {
		height: 10px;
		background-position: -3811px 0px;
	}
	[data-countrycode="nu"] {
		height: 10px;
		background-position: -3833px 0px;
	}
	[data-countrycode="nz"] {
		height: 10px;
		background-position: -3855px 0px;
	}
	[data-countrycode="om"] {
		height: 10px;
		background-position: -3877px 0px;
	}
	[data-countrycode="pa"] {
		height: 14px;
		background-position: -3899px 0px;
	}
	[data-countrycode="pe"] {
		height: 14px;
		background-position: -3921px 0px;
	}
	[data-countrycode="pf"] {
		height: 14px;
		background-position: -3943px 0px;
	}
	[data-countrycode="pg"] {
		height: 15px;
		background-position: -3965px 0px;
	}
	[data-countrycode="ph"] {
		height: 10px;
		background-position: -3987px 0px;
	}
	[data-countrycode="pk"] {
		height: 14px;
		background-position: -4009px 0px;
	}
	[data-countrycode="pl"] {
		height: 13px;
		background-position: -4031px 0px;
	}
	[data-countrycode="pm"] {
		height: 14px;
		background-position: -4053px 0px;
	}
	[data-countrycode="pn"] {
		height: 10px;
		background-position: -4075px 0px;
	}
	[data-countrycode="pr"] {
		height: 14px;
		background-position: -4097px 0px;
	}
	[data-countrycode="ps"] {
		height: 10px;
		background-position: -4119px 0px;
	}
	[data-countrycode="pt"] {
		height: 14px;
		background-position: -4141px 0px;
	}
	[data-countrycode="pw"] {
		height: 13px;
		background-position: -4163px 0px;
	}
	[data-countrycode="py"] {
		height: 11px;
		background-position: -4185px 0px;
	}
	[data-countrycode="qa"] {
		height: 8px;
		background-position: -4207px 0px;
	}
	[data-countrycode="re"] {
		height: 14px;
		background-position: -4229px 0px;
	}
	[data-countrycode="ro"] {
		height: 14px;
		background-position: -4251px 0px;
	}
	[data-countrycode="rs"] {
		height: 14px;
		background-position: -4273px 0px;
	}
	[data-countrycode="ru"] {
		height: 14px;
		background-position: -4295px 0px;
	}
	[data-countrycode="rw"] {
		height: 14px;
		background-position: -4317px 0px;
	}
	[data-countrycode="sa"] {
		height: 14px;
		background-position: -4339px 0px;
	}
	[data-countrycode="sb"] {
		height: 10px;
		background-position: -4361px 0px;
	}
	[data-countrycode="sc"] {
		height: 10px;
		background-position: -4383px 0px;
	}
	[data-countrycode="sd"] {
		height: 10px;
		background-position: -4405px 0px;
	}
	[data-countrycode="se"] {
		height: 13px;
		background-position: -4427px 0px;
	}
	[data-countrycode="sg"] {
		height: 14px;
		background-position: -4449px 0px;
	}
	[data-countrycode="sh"] {
		height: 10px;
		background-position: -4471px 0px;
	}
	[data-countrycode="si"] {
		height: 10px;
		background-position: -4493px 0px;
	}
	[data-countrycode="sj"] {
		height: 15px;
		background-position: -4515px 0px;
	}
	[data-countrycode="sk"] {
		height: 14px;
		background-position: -4537px 0px;
	}
	[data-countrycode="sl"] {
		height: 14px;
		background-position: -4559px 0px;
	}
	[data-countrycode="sm"] {
		height: 15px;
		background-position: -4581px 0px;
	}
	[data-countrycode="sn"] {
		height: 14px;
		background-position: -4603px 0px;
	}
	[data-countrycode="so"] {
		height: 14px;
		background-position: -4625px 0px;
	}
	[data-countrycode="sr"] {
		height: 14px;
		background-position: -4647px 0px;
	}
	[data-countrycode="ss"] {
		height: 10px;
		background-position: -4669px 0px;
	}
	[data-countrycode="st"] {
		height: 10px;
		background-position: -4691px 0px;
	}
	[data-countrycode="sv"] {
		height: 12px;
		background-position: -4713px 0px;
	}
	[data-countrycode="sx"] {
		height: 14px;
		background-position: -4735px 0px;
	}
	[data-countrycode="sy"] {
		height: 14px;
		background-position: -4757px 0px;
	}
	[data-countrycode="sz"] {
		height: 14px;
		background-position: -4779px 0px;
	}
	[data-countrycode="ta"] {
		height: 10px;
		background-position: -4801px 0px;
	}
	[data-countrycode="tc"] {
		height: 10px;
		background-position: -4823px 0px;
	}
	[data-countrycode="td"] {
		height: 14px;
		background-position: -4845px 0px;
	}
	[data-countrycode="tf"] {
		height: 14px;
		background-position: -4867px 0px;
	}
	[data-countrycode="tg"] {
		height: 13px;
		background-position: -4889px 0px;
	}
	[data-countrycode="th"] {
		height: 14px;
		background-position: -4911px 0px;
	}
	[data-countrycode="tj"] {
		height: 10px;
		background-position: -4933px 0px;
	}
	[data-countrycode="tk"] {
		height: 10px;
		background-position: -4955px 0px;
	}
	[data-countrycode="tl"] {
		height: 10px;
		background-position: -4977px 0px;
	}
	[data-countrycode="tm"] {
		height: 14px;
		background-position: -4999px 0px;
	}
	[data-countrycode="tn"] {
		height: 14px;
		background-position: -5021px 0px;
	}
	[data-countrycode="to"] {
		height: 10px;
		background-position: -5043px 0px;
	}
	[data-countrycode="tr"] {
		height: 14px;
		background-position: -5065px 0px;
	}
	[data-countrycode="tt"] {
		height: 12px;
		background-position: -5087px 0px;
	}
	[data-countrycode="tv"] {
		height: 10px;
		background-position: -5109px 0px;
	}
	[data-countrycode="tw"] {
		height: 14px;
		background-position: -5131px 0px;
	}
	[data-countrycode="tz"] {
		height: 14px;
		background-position: -5153px 0px;
	}
	[data-countrycode="ua"] {
		height: 14px;
		background-position: -5175px 0px;
	}
	[data-countrycode="ug"] {
		height: 14px;
		background-position: -5197px 0px;
	}
	[data-countrycode="um"] {
		height: 11px;
		background-position: -5219px 0px;
	}
	[data-countrycode="us"] {
		height: 11px;
		background-position: -5241px 0px;
	}
	[data-countrycode="uy"] {
		height: 14px;
		background-position: -5263px 0px;
	}
	[data-countrycode="uz"] {
		height: 10px;
		background-position: -5285px 0px;
	}
	[data-countrycode="va"] {
		width: 15px;
		height: 15px;
		background-position: -5307px 0px;
	}
	[data-countrycode="vc"] {
		height: 14px;
		background-position: -5324px 0px;
	}
	[data-countrycode="ve"] {
		height: 14px;
		background-position: -5346px 0px;
	}
	[data-countrycode="vg"] {
		height: 10px;
		background-position: -5368px 0px;
	}
	[data-countrycode="vi"] {
		height: 14px;
		background-position: -5390px 0px;
	}
	[data-countrycode="vn"] {
		height: 14px;
		background-position: -5412px 0px;
	}
	[data-countrycode="vu"] {
		height: 12px;
		background-position: -5434px 0px;
	}
	[data-countrycode="wf"] {
		height: 14px;
		background-position: -5456px 0px;
	}
	[data-countrycode="ws"] {
		height: 10px;
		background-position: -5478px 0px;
	}
	[data-countrycode="xk"] {
		height: 15px;
		background-position: -5500px 0px;
	}
	[data-countrycode="ye"] {
		height: 14px;
		background-position: -5522px 0px;
	}
	[data-countrycode="yt"] {
		height: 14px;
		background-position: -5544px 0px;
	}
	[data-countrycode="za"] {
		height: 14px;
		background-position: -5566px 0px;
	}
	[data-countrycode="zm"] {
		height: 14px;
		background-position: -5588px 0px;
	}
	[data-countrycode="zw"] {
		height: 10px;
		background-position: -5610px 0px;
	}
`;

export default GlobalStyle;
