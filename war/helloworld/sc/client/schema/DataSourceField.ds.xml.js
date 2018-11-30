isc.DataSource.create({
    allowAdvancedCriteria:true,
    addGlobalId:"false",
    ID:"DataSourceField",
    fields:[
        {
            basic:"true",
            title:"Name",
            type:"string",
            required:"true",
            xmlAttribute:"true",
            primaryKey:"true",
            name:"name",
            validators:[
            ]
        },
        {
            basic:"true",
            title:"Type",
            type:"string",
            xmlAttribute:"true",
            name:"type",
            validators:[
            ]
        },
        {
            title:"Disabled",
            type:"boolean",
            name:"disabled",
            validators:[
            ]
        },
        {
            title:"ID Allowed",
            type:"boolean",
            xmlAttribute:"true",
            name:"idAllowed",
            validators:[
            ]
        },
        {
            title:"Required",
            type:"boolean",
            xmlAttribute:"true",
            name:"required",
            validators:[
            ]
        },
        {
            title:"Required Message",
            type:"string",
            xmlAttribute:"true",
            name:"requiredMessage",
            validators:[
            ]
        },
        {
            type:"ValueMap",
            name:"valueMap",
            validators:[
            ]
        },
        {
            multiple:"true",
            propertiesOnly:"true",
            type:"Validator",
            name:"validators",
            validators:[
            ]
        },
        {
            title:"Length",
            type:"integer",
            xmlAttribute:"true",
            name:"length",
            validators:[
            ]
        },
        {
            title:"Decimal Pad",
            type:"integer",
            xmlAttribute:"true",
            name:"decimalPad",
            validators:[
            ]
        },
        {
            title:"Decimal Precision",
            type:"integer",
            xmlAttribute:"true",
            name:"decimalPrecision",
            validators:[
            ]
        },
        {
            type:"boolean",
            visibility:"internal",
            name:"xmlRequired",
            validators:[
            ]
        },
        {
            type:"string",
            visibility:"internal",
            name:"xmlMaxOccurs",
            validators:[
            ]
        },
        {
            type:"integer",
            visibility:"internal",
            name:"xmlMinOccurs",
            validators:[
            ]
        },
        {
            type:"boolean",
            visibility:"internal",
            name:"xmlNonEmpty",
            validators:[
            ]
        },
        {
            type:"boolean",
            visibility:"internal",
            name:"xsElementRef",
            validators:[
            ]
        },
        {
            title:"User can hide",
            type:"boolean",
            name:"canHide",
            validators:[
            ]
        },
        {
            type:"boolean",
            visibility:"internal",
            name:"xmlAttribute",
            validators:[
            ]
        },
        {
            type:"boolean",
            visibility:"internal",
            name:"mustQualify",
            validators:[
            ]
        },
        {
            type:"boolean",
            visibility:"internal",
            name:"xmlExplicitTypes",
            validators:[
            ]
        },
        {
            title:"Value XPath",
            type:"XPath",
            xmlAttribute:"true",
            name:"valueXPath",
            validators:[
            ]
        },
        {
            type:"boolean",
            name:"childrenProperty",
            validators:[
            ]
        },
        {
            title:"Title",
            type:"string",
            xmlAttribute:"true",
            name:"title",
            validators:[
            ]
        },
        {
            type:"string",
            xmlAttribute:"true",
            name:"prompt",
            validators:[
            ]
        },
        {
            title:"Detail",
            type:"boolean",
            xmlAttribute:"true",
            name:"detail",
            validators:[
            ]
        },
        {
            title:"Can Edit",
            type:"boolean",
            xmlAttribute:"true",
            name:"canEdit",
            validators:[
            ]
        },
        {
            title:"Can Save",
            type:"boolean",
            xmlAttribute:"true",
            name:"canSave",
            validators:[
            ]
        },
        {
            title:"Can View",
            type:"boolean",
            xmlAttribute:"true",
            name:"canView",
            validators:[
            ]
        },
        {
            inapplicable:"true",
            title:"Inapplicable",
            type:"boolean",
            name:"inapplicable",
            validators:[
            ]
        },
        {
            inapplicable:"true",
            title:"Advanced",
            type:"boolean",
            name:"advanced",
            validators:[
            ]
        },
        {
            inapplicable:"true",
            title:"Visibility",
            type:"string",
            name:"visibility",
            validators:[
            ]
        },
        {
            inapplicable:"true",
            title:"Hidden",
            type:"boolean",
            xmlAttribute:"true",
            name:"hidden",
            validators:[
            ]
        },
        {
            type:"boolean",
            xmlAttribute:"true",
            name:"isRuleCriteria",
            validators:[
            ]
        },
        {
            title:"Is Primary Key",
            type:"boolean",
            xmlAttribute:"true",
            name:"primaryKey",
            validators:[
            ]
        },
        {
            title:"Foreign Key",
            type:"string",
            xmlAttribute:"true",
            name:"foreignKey",
            validators:[
            ]
        },
        {
            valueMap:{
                inner:"A regular inner join",
                outer:"An outer join"
            },
            type:"string",
            xmlAttribute:"true",
            name:"joinType",
            validators:[
            ]
        },
        {
            type:"string",
            xmlAttribute:"true",
            name:"displayField",
            validators:[
            ]
        },
        {
            type:"boolean",
            xmlAttribute:"true",
            name:"useLocalDisplayFieldValue",
            validators:[
            ]
        },
        {
            title:"Tree Root Value",
            type:"string",
            xmlAttribute:"true",
            name:"rootValue",
            validators:[
            ]
        },
        {
            title:"Include From",
            type:"string",
            xmlAttribute:"true",
            name:"includeFrom",
            validators:[
            ]
        },
        {
            title:"Include Via",
            type:"string",
            xmlAttribute:"true",
            name:"includeVia",
            validators:[
            ]
        },
        {
            title:"Related Table Alias",
            type:"string",
            xmlAttribute:"true",
            name:"relatedTableAlias",
            validators:[
            ]
        },
        {
            type:"boolean",
            xmlAttribute:"true",
            name:"showFileInline",
            validators:[
            ]
        },
        {
            type:"boolean",
            xmlAttribute:"true",
            name:"escapeHTML",
            validators:[
            ]
        },
        {
            type:"integerOrIdentifier",
            xmlAttribute:"true",
            name:"imageWidth",
            validators:[
            ]
        },
        {
            type:"integerOrIdentifier",
            xmlAttribute:"true",
            name:"imageHeight",
            validators:[
            ]
        },
        {
            hidden:"true",
            title:"Native Name",
            type:"string",
            name:"nativeName",
            validators:[
            ]
        },
        {
            hidden:"true",
            title:"Native Foreign Key",
            type:"string",
            xmlAttribute:"true",
            name:"nativeFK",
            validators:[
            ]
        },
        {
            hidden:"true",
            type:"boolean",
            xmlAttribute:"true",
            name:"autoDeriveFKs",
            validators:[
            ]
        },
        {
            hidden:"true",
            title:"Field Name",
            type:"string",
            name:"fieldName",
            validators:[
            ]
        },
        {
            hidden:"true",
            uniqueProperty:"name",
            childTagName:"field",
            multiple:"true",
            propertiesOnly:"true",
            type:"DataSourceField",
            name:"fields",
            validators:[
            ]
        },
        {
            type:"boolean",
            xmlAttribute:"true",
            name:"multiple",
            validators:[
            ]
        },
        {
            type:"boolean",
            xmlAttribute:"true",
            name:"validateEachItem",
            validators:[
            ]
        },
        {
            multiple:"true",
            type:"Object",
            name:"pickListFields",
            validators:[
            ]
        },
        {
            valueMap:{
                json:"JSON serialisation",
                none:"No transformation is applied to values",
                simpleString:"Delimeter-separated string"
            },
            type:"string",
            xmlAttribute:"true",
            name:"multipleStorage",
            validators:[
            ]
        },
        {
            type:"boolean",
            xmlAttribute:"true",
            name:"canFilter",
            validators:[
            ]
        },
        {
            type:"boolean",
            name:"ignore",
            validators:[
            ]
        },
        {
            type:"boolean",
            visibility:"internal",
            name:"skipSerialization",
            validators:[
            ]
        },
        {
            type:"boolean",
            xmlAttribute:"true",
            name:"unknownType",
            validators:[
            ]
        },
        {
            type:"boolean",
            xmlAttribute:"true",
            name:"canSortClientOnly",
            validators:[
            ]
        },
        {
            type:"string",
            xmlAttribute:"true",
            name:"childTagName",
            validators:[
            ]
        },
        {
            type:"boolean",
            name:"basic",
            validators:[
            ]
        },
        {
            type:"integer",
            name:"maxFileSize",
            validators:[
            ]
        },
        {
            title:"Frozen",
            type:"boolean",
            xmlAttribute:"true",
            name:"frozen",
            validators:[
            ]
        },
        {
            type:"boolean",
            xmlAttribute:"true",
            name:"canExport",
            validators:[
            ]
        },
        {
            type:"string",
            xmlAttribute:"true",
            name:"exportTitle",
            validators:[
            ]
        },
        {
            type:"string",
            xmlAttribute:"true",
            name:"sqlStorageStrategy",
            validators:[
            ]
        },
        {
            type:"boolean",
            xmlAttribute:"true",
            name:"encodeInResponse",
            validators:[
            ]
        },
        {
            type:"string",
            xmlAttribute:"true",
            name:"mimeType",
            validators:[
            ]
        },
        {
            type:"boolean",
            xmlAttribute:"true",
            name:"ignoreTextMatchStyle",
            validators:[
            ]
        },
        {
            type:"boolean",
            xmlAttribute:"true",
            name:"lenientXPath",
            validators:[
            ]
        },
        {
            type:"string",
            xmlAttribute:"true",
            name:"summaryFunction",
            validators:[
            ]
        },
        {
            type:"string",
            xmlAttribute:"true",
            name:"includeSummaryFunction",
            validators:[
            ]
        },
        {
            type:"string",
            xmlAttribute:"true",
            name:"joinString",
            validators:[
            ]
        },
        {
            type:"string",
            xmlAttribute:"true",
            name:"joinPrefix",
            validators:[
            ]
        },
        {
            type:"string",
            xmlAttribute:"true",
            name:"joinSuffix",
            validators:[
            ]
        },
        {
            type:"boolean",
            name:"allowClientRequestedSummaries",
            validators:[
            ]
        },
        {
            type:"any",
            xmlAttribute:"true",
            name:"defaultValue",
            validators:[
            ]
        },
        {
            type:"string",
            xmlAttribute:"true",
            name:"group",
            validators:[
            ]
        },
        {
            type:"string",
            xmlAttribute:"true",
            name:"ID",
            validators:[
            ]
        },
        {
            type:"string",
            xmlAttribute:"true",
            name:"inheritsFrom",
            validators:[
            ]
        },
        {
            type:"string",
            xmlAttribute:"true",
            name:"javaClass",
            validators:[
            ]
        },
        {
            type:"string",
            xmlAttribute:"true",
            name:"javaCollectionClass",
            validators:[
            ]
        },
        {
            type:"string",
            xmlAttribute:"true",
            name:"javaKeyClass",
            validators:[
            ]
        },
        {
            valueMap:{
                MD5:"Message Digest algorithm 5",
                SHA:"Secure Hashing Algorithm (SHA-1)"
            },
            type:"string",
            xmlAttribute:"true",
            name:"storeWithHash",
            validators:[
            ]
        },
        {
            type:"string",
            name:"sqlDateFormat",
            validators:[
            ]
        },
        {
            type:"boolean",
            name:"storeMilliseconds",
            validators:[
            ]
        },
        {
            type:"boolean",
            name:"initRequiresAuthentication",
            validators:[
            ]
        },
        {
            type:"boolean",
            name:"viewRequiresAuthentication",
            validators:[
            ]
        },
        {
            type:"boolean",
            name:"editRequiresAuthentication",
            validators:[
            ]
        },
        {
            type:"boolean",
            name:"updateRequiresAuthentication",
            validators:[
            ]
        },
        {
            type:"string",
            name:"initRequiresRole",
            validators:[
            ]
        },
        {
            type:"string",
            name:"viewRequiresRole",
            validators:[
            ]
        },
        {
            type:"string",
            name:"editRequiresRole",
            validators:[
            ]
        },
        {
            type:"string",
            name:"updateRequiresRole",
            validators:[
            ]
        },
        {
            type:"string",
            name:"initRequires",
            validators:[
            ]
        },
        {
            type:"string",
            name:"viewRequires",
            validators:[
            ]
        },
        {
            type:"string",
            name:"editRequires",
            validators:[
            ]
        },
        {
            type:"string",
            name:"updateRequires",
            validators:[
            ]
        },
        {
            type:"string",
            name:"customSelectExpression",
            validators:[
            ]
        },
        {
            type:"string",
            name:"customCriteriaExpression",
            validators:[
            ]
        },
        {
            type:"string",
            name:"customInsertExpression",
            validators:[
            ]
        },
        {
            type:"string",
            name:"customUpdateExpression",
            validators:[
            ]
        },
        {
            type:"boolean",
            name:"customSQL",
            validators:[
            ]
        },
        {
            type:"boolean",
            name:"autoQuoteCustomExpressions",
            validators:[
            ]
        },
        {
            type:"boolean",
            name:"creatorOverrides",
            validators:[
            ]
        },
        {
            type:"string",
            name:"valueWriteXPath",
            validators:[
            ]
        },
        {
            type:"boolean",
            name:"useJoin",
            validators:[
            ]
        },
        {
            type:"string",
            name:"tableName",
            validators:[
            ]
        },
        {
            type:"string",
            name:"multipleStorageSeparator",
            validators:[
            ]
        },
        {
            type:"boolean",
            name:"defineSQLColumnAsNotNull",
            validators:[
            ]
        },
        {
            type:"string",
            name:"valueMapEnum",
            validators:[
            ]
        },
        {
            type:"string",
            name:"sqlFalseValue",
            validators:[
            ]
        },
        {
            type:"string",
            name:"sqlTrueValue",
            validators:[
            ]
        },
        {
            type:"string",
            name:"sortByField",
            validators:[
            ]
        },
        {
            type:"string",
            xmlAttribute:"true",
            name:"columnCode",
            validators:[
            ]
        },
        {
            type:"boolean",
            xmlAttribute:"true",
            name:"stringInBrowser",
            validators:[
            ]
        },
        {
            type:"boolean",
            name:"nillable",
            validators:[
            ]
        },
        {
            type:"string",
            name:"validOperators",
            validators:[
            ]
        },
        {
            type:"string",
            name:"fieldTypeProperty",
            validators:[
            ]
        },
        {
            type:"string",
            name:"moveTo",
            validators:[
            ]
        }
    ]
})