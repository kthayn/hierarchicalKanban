Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    launch: function() {
        this.projectCombobox = this.add({
        	xtype: 'rallyprojectpicker',
        	listener: {
        		ready: this._onProjectComboboxLoad,
        		scope: this
        	}
        });
    },
    _onProjectComboboxLoad: function() {
		var cardBoardConfig = {
			xtype: 'rallycardboard',
			types: ['User Story', 'PortfolioItem/SubFeature', 'PortfolioItem/Feature'],
			attribute: 'xArtifactState',
			context: this.getContext(),
			enableRanking: true,
			cardConfig: {
				editable: true,
                showIconsAndHighlightBorder: true,
                showReadyIcon: true,
                showBlockedIcon: true,
                showColorIcon: true,
                showPlusIcon: true,
                showGearIcon: true
			},
			storeConfig: {
				filters: [this.projectCombobox.getQueryFromSelected()]
			}
		};
		this.cardBoard = this.add(cardBoardConfig);
    }
});