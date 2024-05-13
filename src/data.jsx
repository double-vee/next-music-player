import { nanoid } from 'nanoid';

export const data = () => {
  return [
    {
      title: 'Urban Coyote',
      artist: 'Fields Ohio',
      audio:
        'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/HAZE/Fields_Ohio/H_I_N_T_E_R_L_A_N_D/Fields_Ohio_-_06_-_Urban_Coyote.mp3',
      cover:
        'https://freemusicarchive.org/image/?file=images%2Ftracks%2FTrack_-_2015102170235526&width=290&height=290&type=track',
      id: nanoid(),
      active: true,
      license: 'Attribution-ShareAlike 4.0 International',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    },
    {
      title: 'DragonGourd/ November Witch',
      artist: 'Fields Ohio',
      audio:
        'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Fields_of_Ohio/Woods_Without_Maps/Fields_of_Ohio_-_05_-_DragonGourd_November_Witch.mp3',
      cover:
        'https://freemusicarchive.org/image/?file=images%2Ftracks%2FTrack_-_20130815221802975&width=290&height=290&type=track',
      id: nanoid(),
      active: false,
      license: 'Attribution-ShareAlike 3.0 Unported',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    },
    {
      title: 'Mid-American Chant/ Winter of Song',
      artist: 'Fields Ohio',
      audio:
        'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Fields_of_Ohio/Fields_of_Ohio/Fields_of_Ohio_-_06_-_Mid-American_Chant_Winter_of_Song.mp3',
      cover:
        'https://freemusicarchive.org/image/?file=images%2Ftracks%2FTrack_-_20130418131426110&width=290&height=290&type=track',
      id: nanoid(),
      active: false,
      license: 'Attribution-NonCommercial-NoDerivs 3.0 Unported',
      licenseUrl: 'https://creativecommons.org/licenses/by-nc-nd/3.0/',
    },
  ];
};
