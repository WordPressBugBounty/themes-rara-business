import { Icon, Sidebar, Card, Heading } from "../../components";
import { __ } from '@wordpress/i18n';

const Homepage = () => {
    const cardLists = [
        {
            iconSvg: <Icon icon="site" />,
            heading: __('Site Identity', 'rara-business'),
            buttonText: __('Customize', 'rara-business'),
            buttonUrl: cw_dashboard.custom_logo
        },
        {
            iconSvg: <Icon icon="colorsetting" />,
            heading: __("Color Settings", 'rara-business'),
            buttonText: __('Customize', 'rara-business'),
            buttonUrl: cw_dashboard.colors
        },
        {
            iconSvg: <Icon icon="typographysetting" />,
            heading: __("Typography Settings", 'rara-business'),
            buttonText: __('Customize', 'rara-business'),
            buttonUrl: cw_dashboard.typography
        },
        {
            iconSvg: <Icon icon="frontpagesetting" />,
            heading: __("Front Page Settings", 'rara-business'),
            buttonText: __('Customize', 'rara-business'),
            buttonUrl: cw_dashboard.frontpage
        },
        {
            iconSvg: <Icon icon="generalsetting" />,
            heading: __("General Settings"),
            buttonText: __('Customize', 'rara-business'),
            buttonUrl: cw_dashboard.general
        },
        {
            iconSvg: <Icon icon="footersetting" />,
            heading: __('Footer Settings', 'rara-business'),
            buttonText: __('Customize', 'rara-business'),
            buttonUrl: cw_dashboard.footer
        }
    ];

    const proSettings = [
        {
            heading: __('Header Layouts', 'rara-business'),
            para: __('Choose from different unique header layouts.', 'rara-business'),
            buttonText: __('Learn More', 'rara-business'),
            buttonUrl: cw_dashboard?.get_pro
        },
        {
            heading: __('Multiple Layouts', 'rara-business'),
            para: __('Choose layouts for blogs, banners, posts and more.', 'rara-business'),
            buttonText: __('Learn More', 'rara-business'),
            buttonUrl: cw_dashboard?.get_pro
        },
        {
            heading: __('Multiple Sidebar', 'rara-business'),
            para: __('Set different sidebars for posts and pages.', 'rara-business'),
            buttonText: "Learn More",
            buttonUrl: cw_dashboard?.get_pro
        },
        {
            para: __('Boost your website performance with ease.', 'rara-business'),
            heading: __('Performance Settings', 'rara-business'),
            buttonText: __('Learn More', 'rara-business'),
            buttonUrl: cw_dashboard?.get_pro
        },
        {
            para: __('Choose typography for different heading tags.', 'rara-business'),
            heading: __('Typography Settings', 'rara-business'),
            buttonText: __('Learn More', 'rara-business'),
            buttonUrl: cw_dashboard?.get_pro
        },
        {
            para: __('Import the demo content to kickstart your site.', 'rara-business'),
            heading: __('One Click Demo Import', 'rara-business'),
            buttonText: __('Learn More', 'rara-business'),
            buttonUrl: cw_dashboard?.get_pro
        }
    ];

    const sidebarSettings = [
        {
            heading: __('We Value Your Feedback!', 'rara-business'),
            icon: "star",
            para: __("Your review helps us improve and assists others in making informed choices. Share your thoughts today!", 'rara-business'),
            imageurl: <Icon icon="review" />,
            buttonText: __('Leave a Review', 'rara-business'),
            buttonUrl: cw_dashboard.review
        },
        {
            heading: __('Knowledge Base', 'rara-business'),
            para: __("Need help using our theme? Visit our well-organized Knowledge Base!", 'rara-business'),
            imageurl: <Icon icon="documentation" />,
            buttonText: __('Explore', 'rara-business'),
            buttonUrl: cw_dashboard.docmentation
        },
        {
            heading: __('Need Assistance? ', 'rara-business'),
            para: __("If you need help or have any questions, don't hesitate to contact our support team. We're here to assist you!", 'rara-business'),
            imageurl: <Icon icon="supportTwo" />,
            buttonText: __('Submit a Ticket', 'rara-business'),
            buttonUrl: cw_dashboard.support
        }
    ];

    return (
        <>
             <div className="customizer-settings">
                <div className="cw-customizer">
                    <div className="video-section">
                        <div className="cw-settings">
                            <h2>{__('Rara Business Tutorial', 'rara-business')}</h2>
                        </div>
                        <iframe src="https://www.youtube.com/embed/YlpUt4wTaZ4?si=-PtpJjDmFX_iqaqb" title={__( 'How to create a business website in 2021 | Rara Business Tutorial', 'rara-business' )} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <Heading
                        heading={__( 'Quick Customizer Settings', 'rara-business' )}
                        buttonText={__( 'Go To Customizer', 'rara-business' )}
                        buttonUrl={cw_dashboard?.customizer_url}
                        openInNewTab={true}
                    />
                    <Card
                        cardList={cardLists}
                        cardPlace='customizer'
                        cardCol='three-col'
                    />
                    <Heading
                        heading={__( 'More features with Pro version', 'rara-business' )}
                        buttonText={__( 'Go To Customizer', 'rara-business' )}
                        buttonUrl={cw_dashboard?.customizer_url}
                        openInNewTab={true}
                    />
                    <Card
                        cardList={proSettings}
                        cardPlace='cw-pro'
                        cardCol='two-col'
                    />
                    <div className="cw-button">
                        <a href={cw_dashboard?.get_pro} target="_blank" className="cw-button-btn primary-btn long-button">{__('Learn more about the Pro version', 'rara-business')}</a>
                    </div>
                </div>
                <Sidebar sidebarSettings={sidebarSettings} openInNewTab={true} />
            </div>
        </>
    );
}

export default Homepage;