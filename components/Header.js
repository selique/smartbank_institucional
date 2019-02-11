import Link from 'next/link';

export default () =>
  <header className="header container-fluid between-xs">
    <div className="row">
      <div className="col-xs-2">
        <div className="logo">
          <Link href="/">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="114" height="22" alt="SmartBank, Um Banco inteligente diferente!">
                <g fill="none" fill-rule="evenodd">
                  <path fill="#4A4A4A" d="M27.9043783 4.10666667c2.3576925 0 4.0694419 1.20685714 4.4731564 3.25180952l-2.6160698.55314286C29.5676819 6.85561905 28.7279558 6.336 27.8720811 6.336c-.8881718 0-1.4533721.50285714-1.4533721 1.13980952 0 .45257143.193783.78780953.8720233.93866667l2.2446525.51961905c1.8732352.43580952 2.9713385 1.49180956 2.9713385 3.26857146 0 2.3969523-2.0508695 3.6373333-4.4570078 3.6373333-2.4384354 0-4.4408593-1.2068571-4.7315337-3.4026667l2.7452585-.5531428c.2745258 1.1565714 1.0496576 1.6594285 2.1316124 1.6594285 1.0012119 0 1.5987093-.4693333 1.5987093-1.1565714 0-.5028571-.2260801-.8213333-1.0012119-.9889524l-2.260801-.5028571c-1.5502636-.3687619-2.9067443-1.20685715-2.9067443-3.25180953 0-2.17904762 1.7440466-3.5367619 4.2793735-3.5367619zm16.4921981 2.816c1.727898 0 3.1005272 1.35771428 3.1005272 3.40266663v5.2632381h-2.5676241v-4.6933333c0-.95542858-.5974974-1.55885715-1.3564806-1.55885715-.9527662 0-1.5825608.72076195-1.5825608 2.12876195v4.1234285h-2.5837726v-4.6933333c0-.95542858-.5974974-1.55885715-1.3726292-1.55885715-.9366176 0-1.5502636.72076195-1.5502636 2.12876195v4.1234285H33.9V7.17409524h2.5837727v.77104762c.5490516-.63695238 1.340332-1.02247619 2.3899897-1.02247619 1.1304005 0 2.0993153.50285714 2.6483669 1.4247619.6459432-.87161905 1.614858-1.4247619 2.8744471-1.4247619zm13.1547765.25142857v8.41447616h-2.5837727v-.6704762c-.6297946.5866667-1.4695207.9219048-2.5191783.9219048-2.147761 0-3.9564019-1.7935238-3.9564019-4.4586667 0-2.64838092 1.8086409-4.45866663 3.9564019-4.45866663 1.0496576 0 1.8893837.33523809 2.5191783.92190476v-.67047619h2.5837727zM52.9779781 13.560381c1.0496576 0 1.9862752-.8716191 1.9862752-2.1790477 0-1.2906666-.9366176-2.17904759-1.9862752-2.17904759-1.1304006 0-1.9539781.88838099-1.9539781 2.17904759 0 1.3074286.8235775 2.1790477 1.9539781 2.1790477zm11.3554987-6.5036191c.2260802 0 .2745259-.05028571.4683088 0v2.74895239h-.4683088c-1.8086408 0-2.7937041.97219051-2.7937041 3.15123811v2.631619H58.956V7.17409524h2.5837727V8.7832381c.5813488-1.00571429 1.4695207-1.7264762 2.7937041-1.7264762zm6.1870969 6.0510476l.5974975 2.112c-.6297946.352-1.2918864.6201905-2.2123554.6201905-2.0185724 0-3.2297158-1.1398095-3.2297158-3.352381V4.69333333h2.5837727v2.48076191h2.3899897v2.1287619h-2.3899897v2.91657146c0 .871619.4037144 1.223619 1.0819548 1.223619.3552687 0 .8397261-.1340952 1.1788462-.3352381zm10.5888011-3.31885712V9.856c1.0012119.08380952 2.0831667.888381 2.0831667 2.5813333 0 1.8605715-1.2111434 3.1512381-3.568836 3.1512381H74.004V4.35809524h5.603557c1.9862752 0 3.2781615 1.22361905 3.2781615 3.06742857 0 1.54209524-1.0496576 2.27961905-1.7763437 2.36342857zM76.668 6.58742857v2.41371429h2.3253954c.7912804 0 1.3080349-.50285715 1.3080349-1.25714286 0-.704-.5329031-1.15657143-1.2111434-1.15657143H76.668zm0 6.77180953h2.4868812c.8558747 0 1.3241835-.4860952 1.3241835-1.2571429 0-.7375238-.5167546-1.2068571-1.2757378-1.2068571H76.668v2.464zm16.4273904-6.18514286v8.41447616h-2.5837726v-.6704762c-.6297946.5866667-1.4695207.9219048-2.5191784.9219048-2.147761 0-3.9564019-1.7935238-3.9564019-4.4586667 0-2.64838092 1.8086409-4.45866663 3.9564019-4.45866663 1.0496577 0 1.8893838.33523809 2.5191784.92190476v-.67047619h2.5837726zM88.5253425 13.560381c1.0496577 0 1.9862753-.8716191 1.9862753-2.1790477 0-1.2906666-.9366176-2.17904759-1.9862753-2.17904759-1.1304005 0-1.953978.88838099-1.953978 2.17904759 0 1.3074286.8235775 2.1790477 1.953978 2.1790477zm11.0453113-6.63771433c1.8893842 0 3.1489732 1.39123809 3.1489732 3.50323813v5.1626666h-2.567624v-4.5927619c0-.9889524-.5652006-1.65942855-1.3887781-1.65942855-1.0173605 0-1.6794522.72076195-1.6794522 2.34666665v3.9055238H94.5V7.17409524h2.5837727v.80457143c.613646-.67047619 1.4695207-1.056 2.4868811-1.056zm13.5481052 8.66590473H109.8083l-2.632219-3.0339047h-.468308v3.0339047H104.124V3.52h2.583773v6.520381h.355268l2.567624-2.86628576h3.116676l-3.552687 4.00609526 3.924105 4.4083809z" />
                  <path fill="#29A4FE" d="M12.9563023 6.72224767h-1.8534198L8.61831304 11.5282953v.0010096l-1.92753284-.4524978c-1.25021124-.2594644-1.89840287-.6604731-1.89840287-1.58041066 0-1.03785754.90283126-1.65128384 2.29195486-1.65128384.65512734 0 1.1047595.11630466 1.49335741.37051918v-.00383644l2.4576192-4.76869287h1.9209935c1.5048509 0 2.2917567.54255315 2.2917567 1.55698821 0 1.03805946-.8102891 1.72215699-2.2917567 1.72215699zM.1136391 16.4766227l3.82801148-.74409c.2665958 1.3972908 1.44355936 2.3035736 3.28159397 2.3035736.57189882 0 1.70677911-.1476019 1.70677911-.1476019l.25563045-.4942948c.05845813-.1017666.21797945-.4260466.30893633-.5972729.00336878-.0062594.08857892-.1726397.09234402-.1786972l1.92277694-3.6918653h2.0022403c1.6205782 0 2.3381269-.7313463 2.3381269-1.6749082 0-.9908107-.8102891-1.48611504-2.2455847-1.48611504h-2.2509351L8.50912516 15.3386863l-.04022712-.0125189.04022712.0125189c-.15179297-.0486622-.53821109-.1443712-.73023117-.1807164l-2.59296466-.5661776C2.0836854 13.9076948.6252047 12.4686266.6252047 9.92102959c0-3.20827206 2.54659449-5.23694027 6.25085803-5.23694027.54415598 0 1.13824907.04563342 1.75136582.16052465v-.00161534L11.0353088.18778356h2.546c3.4032538 0 5.5796795 1.34598411 5.5796795 3.96445425 0 1.48631698-.9955716 3.32477863-2.3617083 3.82028493 1.921588.42443123 3.0562701 1.77061726 3.0562701 3.49277426 0 2.665517-2.2852173 4.2340145-5.8041983 4.2340145l-2.0664452.0137304-.3943446.7626436-2.45821377 4.7838367-.08620097.0121151c-.48252724.0722865-1.40339134.1377079-1.93862998.1377079-3.30186307 0-6.3018804-1.516946-6.99387819-4.9327225z" />
                </g>
              </svg>
            </a>
          </Link>
        </div>
      </div>
      <div className="col-xs-10">
        <a className="hamburger">
          <span className="hamburger-item"></span>
          <span className="hamburger-item"></span>
          <span className="hamburger-item"></span>
        </a>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list--item">
              <a className="nav__list--item-link" href="#parceiros">Parceiros</a>
            </li>
            <li className="nav__list--item">
              <a className="nav__list--item-link" href="#carreiras">Carreiras</a>
            </li>
            <li className="nav__list--item">
              <a className="nav__list--item-link" href="https://smartbankhelp.zendesk.com/">FAQ</a>
            </li>
            <li className="nav__list--item">
              <a name="modal-contact" className="nav__list--item-link" href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
