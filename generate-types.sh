#!/bin/bash

export $(cat .env.local | awk '!/^\\s*#/' | awk '!/^\\s*$/')
yarn cf-content-types-generator \
	--spaceId $CONTENTFUL_SPACE_ID \
	--token $CONTENTFUL_MANAGEMENT_TOKEN \
	-o content/types \
	-X
yarn eslint --fix content/types
yarn prettier --write content/types
