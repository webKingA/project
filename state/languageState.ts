import { atom } from 'recoil';

import { activeLanguage } from '~constants/languageConstants';
import { ILanguage } from '~types/languageType';

const languageState = atom<ILanguage>({
	key: 'languageState',
	default: activeLanguage,
});

export default languageState;
