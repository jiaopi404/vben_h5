import { defineStore } from 'pinia';
import { store } from '/@/store';

import { LINK_KEY } from '/@/enums/cacheEnum';
import { createLocalStorage } from '/@/utils/cache';

interface LinkStateI {
  initLink: string;
}

const ls = createLocalStorage();

const lsLinkSetting = (ls.get(LINK_KEY) || { initLink: '' }) as LinkStateI;

export const useLinkStore = defineStore({
  id: 'app-link',
  state: (): LinkStateI => ({
    initLink: '',
  }),
  getters: {
    getInitLink(): string {
      return this.initLink || lsLinkSetting.initLink;
    },
  },
  actions: {
    /**
     * Set up multilingual information and cache
     * @param info multilingual info
     */
    setInitLink(link) {
      this.initLink = link;
      ls.set(LINK_KEY, this.$state);
    },
  },
});

// Need to be used outside the setup
export function useLinkStoreWithOut() {
  return useLinkStore(store);
}
