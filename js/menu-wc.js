'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Conga Digital Commerce 202604.2.0 on Conga Revenue Lifecycle Platform</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AddCommentsComponent.html" data-type="entity-link" >AddCommentsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdditionalInformationComponent.html" data-type="entity-link" >AdditionalInformationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddressComponent.html" data-type="entity-link" >AddressComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddToCartComponent.html" data-type="entity-link" >AddToCartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AlertComponent.html" data-type="entity-link" >AlertComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AssetDropdownButtonComponent.html" data-type="entity-link" >AssetDropdownButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AssetListComponent.html" data-type="entity-link" >AssetListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BreadcrumbComponent.html" data-type="entity-link" >BreadcrumbComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CaptchaComponent.html" data-type="entity-link" >CaptchaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CartTotalsViewComponent.html" data-type="entity-link" >CartTotalsViewComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CategoryFilterComponent.html" data-type="entity-link" >CategoryFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChartComponent.html" data-type="entity-link" >ChartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConstraintRuleAlertComponent.html" data-type="entity-link" >ConstraintRuleAlertComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConstraintRuleSidebarComponent.html" data-type="entity-link" >ConstraintRuleSidebarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CRIconComponent.html" data-type="entity-link" >CRIconComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CRRecommendedProductsComponent.html" data-type="entity-link" >CRRecommendedProductsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DataFilterComponent.html" data-type="entity-link" >DataFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DependentPicklistComponent.html" data-type="entity-link" >DependentPicklistComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DocumentSelectorComponent.html" data-type="entity-link" >DocumentSelectorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DotsComponent.html" data-type="entity-link" >DotsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EmailComposerComponent.html" data-type="entity-link" >EmailComposerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EmailSearchComponent.html" data-type="entity-link" >EmailSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ErrorPageComponent.html" data-type="entity-link" >ErrorPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FacetFilterComponent.html" data-type="entity-link" >FacetFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FavoriteFilterComponent.html" data-type="entity-link" >FavoriteFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FavoriteModalComponent.html" data-type="entity-link" >FavoriteModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FilesComponent.html" data-type="entity-link" >FilesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FileUploaderComponent.html" data-type="entity-link" >FileUploaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GenerateDocumentComponent.html" data-type="entity-link" >GenerateDocumentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputDateComponent.html" data-type="entity-link" >InputDateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputFieldComponent.html" data-type="entity-link" >InputFieldComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputSelectComponent.html" data-type="entity-link" class="deprecated-name">InputSelectComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/JumbotronComponent.html" data-type="entity-link" >JumbotronComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LineitemCardComponent.html" data-type="entity-link" >LineitemCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LineItemMenuComponent.html" data-type="entity-link" >LineItemMenuComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LineItemTableRowComponent.html" data-type="entity-link" >LineItemTableRowComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MiniCartComponent.html" data-type="entity-link" >MiniCartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MiniProfileComponent.html" data-type="entity-link" >MiniProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OutputFieldComponent.html" data-type="entity-link" >OutputFieldComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PaymentIntegrationComponent.html" data-type="entity-link" >PaymentIntegrationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PopoverComponent.html" data-type="entity-link" >PopoverComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PresentDocumentComponent.html" data-type="entity-link" >PresentDocumentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PriceComponent.html" data-type="entity-link" >PriceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PriceModalComponent.html" data-type="entity-link" >PriceModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PriceSummaryComponent.html" data-type="entity-link" >PriceSummaryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductAttributeComponent.html" data-type="entity-link" >ProductAttributeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductCardComponent.html" data-type="entity-link" >ProductCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductCarouselComponent.html" data-type="entity-link" >ProductCarouselComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductCompareComponent.html" data-type="entity-link" >ProductCompareComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductConfigurationComponent.html" data-type="entity-link" >ProductConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductConfigurationSummaryComponent.html" data-type="entity-link" >ProductConfigurationSummaryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductDrawerComponent.html" data-type="entity-link" >ProductDrawerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductImagesComponent.html" data-type="entity-link" >ProductImagesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductSearchComponent.html" data-type="entity-link" >ProductSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductTypeFilterComponent.html" data-type="entity-link" >ProductTypeFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PromotionComponent.html" data-type="entity-link" >PromotionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PromotionModalComponent.html" data-type="entity-link" >PromotionModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/QuickAddComponent.html" data-type="entity-link" >QuickAddComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RecipientsComponent.html" data-type="entity-link" >RecipientsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReplaceProductModalComponent.html" data-type="entity-link" >ReplaceProductModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RevalidateCartModalComponent.html" data-type="entity-link" >RevalidateCartModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SelectAllComponent.html" data-type="entity-link" >SelectAllComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SendForSignatureComponent.html" data-type="entity-link" >SendForSignatureComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SpinnerComponent.html" data-type="entity-link" >SpinnerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TableComponent.html" data-type="entity-link" >TableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TableRowSubItemComponent.html" data-type="entity-link" >TableRowSubItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ViewCommentsComponent.html" data-type="entity-link" >ViewCommentsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WizardComponent.html" data-type="entity-link" >WizardComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/AutoFocusDirective.html" data-type="entity-link" >AutoFocusDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Account.html" data-type="entity-link" >Account</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountBase.html" data-type="entity-link" >AccountBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountLocation.html" data-type="entity-link" >AccountLocation</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountLocationTest.html" data-type="entity-link" >AccountLocationTest</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdjustmentItem.html" data-type="entity-link" >AdjustmentItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppliedRuleActionInfo.html" data-type="entity-link" >AppliedRuleActionInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppliedRuleInfo.html" data-type="entity-link" >AppliedRuleInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApprovalRequest.html" data-type="entity-link" >ApprovalRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/Attachment.html" data-type="entity-link" >Attachment</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttributeGroup.html" data-type="entity-link" >AttributeGroup</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttributeGroupTranslation.html" data-type="entity-link" >AttributeGroupTranslation</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttributeValue.html" data-type="entity-link" >AttributeValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttributeValueMatrix.html" data-type="entity-link" >AttributeValueMatrix</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttributeValueMatrixEntry.html" data-type="entity-link" >AttributeValueMatrixEntry</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthConfig.html" data-type="entity-link" >AuthConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthConfigProviders.html" data-type="entity-link" >AuthConfigProviders</a>
                            </li>
                            <li class="link">
                                <a href="classes/BatchAction.html" data-type="entity-link" >BatchAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/BillingPreference.html" data-type="entity-link" >BillingPreference</a>
                            </li>
                            <li class="link">
                                <a href="classes/Cart.html" data-type="entity-link" >Cart</a>
                            </li>
                            <li class="link">
                                <a href="classes/CartColumn.html" data-type="entity-link" >CartColumn</a>
                            </li>
                            <li class="link">
                                <a href="classes/CartColumnView.html" data-type="entity-link" >CartColumnView</a>
                            </li>
                            <li class="link">
                                <a href="classes/CartItem.html" data-type="entity-link" >CartItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryTranslation.html" data-type="entity-link" >CategoryTranslation</a>
                            </li>
                            <li class="link">
                                <a href="classes/Classification.html" data-type="entity-link" >Classification</a>
                            </li>
                            <li class="link">
                                <a href="classes/CollaborationRequest.html" data-type="entity-link" >CollaborationRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigCustomDisplayColumns.html" data-type="entity-link" >ConfigCustomDisplayColumns</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConstraintRule.html" data-type="entity-link" >ConstraintRule</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConstraintRuleAction.html" data-type="entity-link" >ConstraintRuleAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConstraintRuleCondition.html" data-type="entity-link" >ConstraintRuleCondition</a>
                            </li>
                            <li class="link">
                                <a href="classes/Contact.html" data-type="entity-link" >Contact</a>
                            </li>
                            <li class="link">
                                <a href="classes/CurrencyType.html" data-type="entity-link" >CurrencyType</a>
                            </li>
                            <li class="link">
                                <a href="classes/DocumentMetadata.html" data-type="entity-link" >DocumentMetadata</a>
                            </li>
                            <li class="link">
                                <a href="classes/Favorite.html" data-type="entity-link" >Favorite</a>
                            </li>
                            <li class="link">
                                <a href="classes/Feature.html" data-type="entity-link" >Feature</a>
                            </li>
                            <li class="link">
                                <a href="classes/FeatureSet.html" data-type="entity-link" >FeatureSet</a>
                            </li>
                            <li class="link">
                                <a href="classes/File.html" data-type="entity-link" >File</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterCondition.html" data-type="entity-link" >FilterCondition</a>
                            </li>
                            <li class="link">
                                <a href="classes/GatewayCommunication.html" data-type="entity-link" >GatewayCommunication</a>
                            </li>
                            <li class="link">
                                <a href="classes/GatewayTransaction.html" data-type="entity-link" >GatewayTransaction</a>
                            </li>
                            <li class="link">
                                <a href="classes/Incentive.html" data-type="entity-link" >Incentive</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockAccountLocationService.html" data-type="entity-link" >MockAccountLocationService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Note.html" data-type="entity-link" >Note</a>
                            </li>
                            <li class="link">
                                <a href="classes/Opportunity.html" data-type="entity-link" >Opportunity</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderAdjustmentItem.html" data-type="entity-link" >OrderAdjustmentItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderAttributeValue.html" data-type="entity-link" >OrderAttributeValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderLineItem.html" data-type="entity-link" >OrderLineItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaymentMethod.html" data-type="entity-link" >PaymentMethod</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaymentTransaction.html" data-type="entity-link" >PaymentTransaction</a>
                            </li>
                            <li class="link">
                                <a href="classes/Price.html" data-type="entity-link" >Price</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceDimension.html" data-type="entity-link" >PriceDimension</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceList.html" data-type="entity-link" >PriceList</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceListBase.html" data-type="entity-link" >PriceListBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceListCategory.html" data-type="entity-link" >PriceListCategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceListItem.html" data-type="entity-link" >PriceListItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceMatrix.html" data-type="entity-link" >PriceMatrix</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceMatrixEntry.html" data-type="entity-link" >PriceMatrixEntry</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceRule.html" data-type="entity-link" >PriceRule</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceRuleEntry.html" data-type="entity-link" >PriceRuleEntry</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceRuleSet.html" data-type="entity-link" >PriceRuleSet</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttribute.html" data-type="entity-link" >ProductAttribute</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeGroup.html" data-type="entity-link" >ProductAttributeGroup</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeGroupMember.html" data-type="entity-link" >ProductAttributeGroupMember</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeMatrixView.html" data-type="entity-link" >ProductAttributeMatrixView</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeRule.html" data-type="entity-link" >ProductAttributeRule</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeRule-1.html" data-type="entity-link" >ProductAttributeRule</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeRuleAction.html" data-type="entity-link" >ProductAttributeRuleAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeRuleAction-1.html" data-type="entity-link" >ProductAttributeRuleAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeRuleView.html" data-type="entity-link" >ProductAttributeRuleView</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeRuleView-1.html" data-type="entity-link" >ProductAttributeRuleView</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductCategory.html" data-type="entity-link" >ProductCategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductFeatureValue.html" data-type="entity-link" >ProductFeatureValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductGroup.html" data-type="entity-link" >ProductGroup</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductGroupMember.html" data-type="entity-link" >ProductGroupMember</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductInformation.html" data-type="entity-link" >ProductInformation</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductOptionComponent.html" data-type="entity-link" >ProductOptionComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductOptionGroup.html" data-type="entity-link" >ProductOptionGroup</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductOptionPrice.html" data-type="entity-link" >ProductOptionPrice</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductTranslation.html" data-type="entity-link" >ProductTranslation</a>
                            </li>
                            <li class="link">
                                <a href="classes/Quote.html" data-type="entity-link" >Quote</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuoteAdjustmentItem.html" data-type="entity-link" >QuoteAdjustmentItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuoteAttachment.html" data-type="entity-link" >QuoteAttachment</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuoteAttributeValue.html" data-type="entity-link" >QuoteAttributeValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuoteLineItem.html" data-type="entity-link" >QuoteLineItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/SamlSSOConfig.html" data-type="entity-link" >SamlSSOConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/StoreBanner.html" data-type="entity-link" >StoreBanner</a>
                            </li>
                            <li class="link">
                                <a href="classes/Storefront.html" data-type="entity-link" >Storefront</a>
                            </li>
                            <li class="link">
                                <a href="classes/SummaryGroup.html" data-type="entity-link" >SummaryGroup</a>
                            </li>
                            <li class="link">
                                <a href="classes/Template.html" data-type="entity-link" >Template</a>
                            </li>
                            <li class="link">
                                <a href="classes/TemplateVersion.html" data-type="entity-link" >TemplateVersion</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserBase.html" data-type="entity-link" >UserBase</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccountLocationService.html" data-type="entity-link" class="deprecated-name">AccountLocationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AccountService.html" data-type="entity-link" >AccountService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AlertService.html" data-type="entity-link" >AlertService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApiEndpointService.html" data-type="entity-link" >ApiEndpointService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppliedRuleActionInfoService.html" data-type="entity-link" >AppliedRuleActionInfoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppLoader.html" data-type="entity-link" >AppLoader</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AssetService.html" data-type="entity-link" >AssetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AttachmentService.html" data-type="entity-link" >AttachmentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartGraphQLService.html" data-type="entity-link" >CartGraphQLService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartItemService.html" data-type="entity-link" >CartItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link" >CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link" >CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CollaborationRequestService.html" data-type="entity-link" >CollaborationRequestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConstraintRuleConditionService.html" data-type="entity-link" >ConstraintRuleConditionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConstraintRuleMessageService.html" data-type="entity-link" >ConstraintRuleMessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConstraintRuleService.html" data-type="entity-link" >ConstraintRuleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactService.html" data-type="entity-link" >ContactService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConversionService.html" data-type="entity-link" >ConversionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmailService.html" data-type="entity-link" >EmailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExceptionService.html" data-type="entity-link" >ExceptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FavoriteService.html" data-type="entity-link" >FavoriteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileService.html" data-type="entity-link" >FileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GuestGuard.html" data-type="entity-link" >GuestGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GuestUserService.html" data-type="entity-link" >GuestUserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IncentiveService.html" data-type="entity-link" >IncentiveService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IntegrationService.html" data-type="entity-link" >IntegrationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LineItemFieldProcessingService.html" data-type="entity-link" >LineItemFieldProcessingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LineItemProductService.html" data-type="entity-link" >LineItemProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LineItemService.html" data-type="entity-link" >LineItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MiniCartService.html" data-type="entity-link" >MiniCartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NoteService.html" data-type="entity-link" >NoteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderLineItemService.html" data-type="entity-link" >OrderLineItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PageErrorService.html" data-type="entity-link" >PageErrorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PriceListItemService.html" data-type="entity-link" >PriceListItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PriceListService.html" data-type="entity-link" >PriceListService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PriceMatrixService.html" data-type="entity-link" >PriceMatrixService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PriceService.html" data-type="entity-link" >PriceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductAttributeGroupService.html" data-type="entity-link" class="deprecated-name">ProductAttributeGroupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductAttributeService.html" data-type="entity-link" >ProductAttributeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductConfigurationService.html" data-type="entity-link" >ProductConfigurationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductDrawerService.html" data-type="entity-link" >ProductDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductFeatureValueService.html" data-type="entity-link" >ProductFeatureValueService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductInformationService.html" data-type="entity-link" >ProductInformationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductOptionComponentService.html" data-type="entity-link" class="deprecated-name">ProductOptionComponentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductOptionGroupService.html" data-type="entity-link" class="deprecated-name">ProductOptionGroupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductOptionService.html" data-type="entity-link" >ProductOptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PromotionService.html" data-type="entity-link" >PromotionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QueryParamsHandlerService.html" data-type="entity-link" >QueryParamsHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuoteService.html" data-type="entity-link" >QuoteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReplaceModalService.html" data-type="entity-link" >ReplaceModalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RevalidateCartService.html" data-type="entity-link" >RevalidateCartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SendForSignatureService.html" data-type="entity-link" >SendForSignatureService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StorageHandlerService.html" data-type="entity-link" >StorageHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StorefrontService.html" data-type="entity-link" >StorefrontService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TranslatorLoaderService.html" data-type="entity-link" >TranslatorLoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserViewMappingService.html" data-type="entity-link" >UserViewMappingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserViewService.html" data-type="entity-link" >UserViewService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AccordionRows.html" data-type="entity-link" >AccordionRows</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AccountInfo.html" data-type="entity-link" >AccountInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ActionItem.html" data-type="entity-link" >ActionItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ActionToPerform.html" data-type="entity-link" >ActionToPerform</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddCommentsConfig.html" data-type="entity-link" >AddCommentsConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddCommentsOutput.html" data-type="entity-link" >AddCommentsOutput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AggregateFields.html" data-type="entity-link" >AggregateFields</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AggregateQueryPayload.html" data-type="entity-link" >AggregateQueryPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AggregateResultPerRecord.html" data-type="entity-link" >AggregateResultPerRecord</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AggregateResultSet.html" data-type="entity-link" >AggregateResultSet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AnimationStyle.html" data-type="entity-link" >AnimationStyle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AssetActionLabels.html" data-type="entity-link" >AssetActionLabels</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AttachmentDetails.html" data-type="entity-link" >AttachmentDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BreadcrumbLink.html" data-type="entity-link" >BreadcrumbLink</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartActionResponse.html" data-type="entity-link" >CartActionResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartItemView.html" data-type="entity-link" >CartItemView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartResult.html" data-type="entity-link" >CartResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CheckboxSelectionState.html" data-type="entity-link" >CheckboxSelectionState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChildRecordOptions.html" data-type="entity-link" >ChildRecordOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ComplexArray.html" data-type="entity-link" >ComplexArray</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfigurationFlags.html" data-type="entity-link" >ConfigurationFlags</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfigurationState.html" data-type="entity-link" >ConfigurationState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConstraintRuleDetail.html" data-type="entity-link" >ConstraintRuleDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConstraintRuleGroups.html" data-type="entity-link" >ConstraintRuleGroups</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConstraintRuleInfoDetail.html" data-type="entity-link" >ConstraintRuleInfoDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConstraintRuleSuccessDetail.html" data-type="entity-link" >ConstraintRuleSuccessDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CrIconView.html" data-type="entity-link" >CrIconView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomFilterView.html" data-type="entity-link" >CustomFilterView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentDetails.html" data-type="entity-link" >DocumentDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentReviewPayload.html" data-type="entity-link" >DocumentReviewPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailAttachment.html" data-type="entity-link" >EmailAttachment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailData.html" data-type="entity-link" >EmailData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailFieldConfig.html" data-type="entity-link" >EmailFieldConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailFormConfig.html" data-type="entity-link" >EmailFormConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailFormEvent.html" data-type="entity-link" >EmailFormEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailHeaders.html" data-type="entity-link" >EmailHeaders</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailInfo.html" data-type="entity-link" >EmailInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailParameters.html" data-type="entity-link" >EmailParameters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailRequestPayload.html" data-type="entity-link" >EmailRequestPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailTemplate.html" data-type="entity-link" >EmailTemplate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailTemplateCategory.html" data-type="entity-link" >EmailTemplateCategory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailTemplateParameters.html" data-type="entity-link" >EmailTemplateParameters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailTemplateRenderResponse.html" data-type="entity-link" >EmailTemplateRenderResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailTemplateWrapper.html" data-type="entity-link" >EmailTemplateWrapper</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ESignUser.html" data-type="entity-link" >ESignUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FacetFilter.html" data-type="entity-link" >FacetFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FacetFilterPayload.html" data-type="entity-link" >FacetFilterPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FacetResult.html" data-type="entity-link" >FacetResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FacetValue.html" data-type="entity-link" >FacetValue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FavoriteItemRequest.html" data-type="entity-link" >FavoriteItemRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FavoriteRequest.html" data-type="entity-link" >FavoriteRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FavoriteResult.html" data-type="entity-link" >FavoriteResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FieldFilter.html" data-type="entity-link" >FieldFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FieldWithOperators.html" data-type="entity-link" >FieldWithOperators</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileOutput.html" data-type="entity-link" >FileOutput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilterOptions.html" data-type="entity-link" >FilterOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GenerateDocument.html" data-type="entity-link" >GenerateDocument</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GroupByAggregateResponse.html" data-type="entity-link" >GroupByAggregateResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFile.html" data-type="entity-link" >IFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ItemGroup.html" data-type="entity-link" >ItemGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ItemRequest.html" data-type="entity-link" >ItemRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Job.html" data-type="entity-link" >Job</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Lookup.html" data-type="entity-link" >Lookup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NumberFormat.html" data-type="entity-link" >NumberFormat</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ObjectView.html" data-type="entity-link" >ObjectView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrderPayload.html" data-type="entity-link" class="deprecated-name">OrderPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrderResult.html" data-type="entity-link" >OrderResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaymentConfig.html" data-type="entity-link" >PaymentConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaymentIntentResponse.html" data-type="entity-link" >PaymentIntentResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaymentMetadata.html" data-type="entity-link" >PaymentMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaymentResult.html" data-type="entity-link" >PaymentResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PerformAction.html" data-type="entity-link" >PerformAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PollingDispatcher.html" data-type="entity-link" >PollingDispatcher</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PresentActionResponse.html" data-type="entity-link" >PresentActionResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductResult.html" data-type="entity-link" >ProductResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QueryParams.html" data-type="entity-link" >QueryParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuickAddField.html" data-type="entity-link" >QuickAddField</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuoteResult.html" data-type="entity-link" >QuoteResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RevalidationFields.html" data-type="entity-link" >RevalidationFields</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RevalidationPayload.html" data-type="entity-link" >RevalidationPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReviewDocumentInfo.html" data-type="entity-link" >ReviewDocumentInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReviewDocumentResponse.html" data-type="entity-link" >ReviewDocumentResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReviewEmailInfo.html" data-type="entity-link" >ReviewEmailInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchResults.html" data-type="entity-link" >SearchResults</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignatureActionResponse.html" data-type="entity-link" >SignatureActionResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignatureEmailContent.html" data-type="entity-link" >SignatureEmailContent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignatureProvider.html" data-type="entity-link" >SignatureProvider</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignatureRecipient.html" data-type="entity-link" >SignatureRecipient</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignatureRequestData.html" data-type="entity-link" >SignatureRequestData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignatureResponse.html" data-type="entity-link" >SignatureResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Signer.html" data-type="entity-link" >Signer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SortInfo.html" data-type="entity-link" >SortInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableAction.html" data-type="entity-link" >TableAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableColumn.html" data-type="entity-link" >TableColumn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableFilter.html" data-type="entity-link" >TableFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableOptions.html" data-type="entity-link" >TableOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TaxAddress.html" data-type="entity-link" >TaxAddress</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TaxCalculationResponse.html" data-type="entity-link" >TaxCalculationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TaxMetadata.html" data-type="entity-link" >TaxMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TemplateList.html" data-type="entity-link" >TemplateList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserLocaleDateTimeFormat.html" data-type="entity-link" >UserLocaleDateTimeFormat</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/View.html" data-type="entity-link" >View</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ViewCommentsConfig.html" data-type="entity-link" >ViewCommentsConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ViewCommentsOutput.html" data-type="entity-link" >ViewCommentsOutput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Views.html" data-type="entity-link" >Views</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WizardConfig.html" data-type="entity-link" >WizardConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WizardStep.html" data-type="entity-link" >WizardStep</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WizardStepChangeEvent.html" data-type="entity-link" >WizardStepChangeEvent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/AttributeValuePricePipe.html" data-type="entity-link" class="deprecated-name">AttributeValuePricePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/CartItemPricePipe.html" data-type="entity-link" class="deprecated-name">CartItemPricePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/CartPricePipe.html" data-type="entity-link" class="deprecated-name">CartPricePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/ConvertCurrencyPipe.html" data-type="entity-link" >ConvertCurrencyPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/DateFormatPipe.html" data-type="entity-link" >DateFormatPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/DigitFormatterPipe.html" data-type="entity-link" >DigitFormatterPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/LineItemPricePipe.html" data-type="entity-link" class="deprecated-name">LineItemPricePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/LocalCurrencyPipe.html" data-type="entity-link" >LocalCurrencyPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/NumberFormatPipe.html" data-type="entity-link" >NumberFormatPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/OptionPricePipe.html" data-type="entity-link" class="deprecated-name">OptionPricePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/OrderLineItemPricePipe.html" data-type="entity-link" class="deprecated-name">OrderLineItemPricePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/OrderPricePipe.html" data-type="entity-link" class="deprecated-name">OrderPricePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/ProductPricePipe.html" data-type="entity-link" class="deprecated-name">ProductPricePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/QuotePricePipe.html" data-type="entity-link" class="deprecated-name">QuotePricePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/SplitPascalCasePipe.html" data-type="entity-link" >SplitPascalCasePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/SummaryGroupDisplayNamePipe.html" data-type="entity-link" >SummaryGroupDisplayNamePipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});