import React from 'react';
import AddDocument from '/imports/ui/components/common/AddDocument'
import DocumentsList from '/imports/ui/components/common/DocumentsList';
import PostFilters from '/imports/ui/components/common/PostFilters';
import SearchBox from '/imports/ui/components/common/SearchBox';
// ANTD
import Button from 'antd/lib/button';
import Card from 'antd/lib/card';
import message from 'antd/lib/message';
import Tag from 'antd/lib/tag';

const HomePage = () => {
	return (
		<div style={{padding: 20}}>
			<div style={{height: '100%', marginTop: 15, display: 'flex', alignItems: 'flex-start', justifyContent: 'top'}}>
				<div style={{flex: 1}}>
					<div>
						<AddDocument />
					</div>
					<div>
						<SearchBox />
					</div>
					<Card bodyStyle={{padding: 10}} style={{minHeight: 300, width: 225}}>
						<PostFilters />
					</Card>
				</div>
				<div style={{flex: 3}}>
					<DocumentsList />
				</div>
			</div>
		</div>
	);
}

const AppHome = ({ children }) => {
	return (
		<div>
			{ children ? children : <HomePage />}
		</div>
	);
}

export default AppHome