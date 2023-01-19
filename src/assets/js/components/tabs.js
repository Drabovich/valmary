
// Табы
const tabs = () => {

    function bindTabs(tabSelector, contentSelector, activeClass, startTitle, startContent) {

        const tabTitle = document.querySelectorAll(tabSelector),
            tabContent = document.querySelectorAll(contentSelector);

            tabTitle.forEach(item => item.addEventListener('click', () => {

                tabContent.forEach(element => element.classList.add('hidden'));

                tabTitle.forEach(element => element.classList.remove(activeClass));

            item.classList.add(activeClass);

            const activeContent = document.querySelector('#' + item.dataset.tab);
            activeContent.classList.remove('hidden');
        }))

        document.querySelector(startTitle).classList.add(activeClass);
        document.querySelector(startContent).classList.remove('hidden');
    }

    // Табы в выпадающем меню в шапке сайта
    // bindTabs('.catalog-header__title', '.catalog-header__content', 'active-title', '[data-tab="tab-1"]', '#tab-1');
}