import { __ } from "@wordpress/i18n"
import { themeClub, themeInstallation, gdpr, seo, pluginsSetup, vipSupport } from "../../components/images"

const Offers = () => {

    const offerBannerLists = [
        {
            image: themeClub,
            imageUrl: cw_dashboard.theme_club_upgrade,
            title: __("Theme Club", "rara-business"),
        },
    ]

    const offerCardLists = [
        {
            image: themeInstallation,
            imageUrl: cw_dashboard.theme_install,
            title: __("Theme Installation & Setup", "rara-business"),
        },
        {
            image: gdpr,
            imageUrl: cw_dashboard.gdpr_setup,
            title: __("GDPR Compliance", "rara-business"),
        },
        {
            image: seo,
            imageUrl: cw_dashboard.seo_setup,
            title: __("Must Have SEO Setup", "rara-business"),
        },
        {
            image: pluginsSetup,
            imageUrl: cw_dashboard.plugin_setup,
            title: __("Must Have Plugins Setup", "rara-business"),
        },
        {
            image: vipSupport,
            imageUrl: cw_dashboard.vip_support,
            title: __("VIP Support", "rara-business"),
        },
    ]


    return (
        <>
            <div className="cw-offer">
                <div className="banner-section">
                    {offerBannerLists.map((banner, index) => (
                        <a className="image-link" href={banner.imageUrl} key={index} target="_blank">
                            <img src={banner.image} alt={banner.title} />
                        </a>
                    ))}
                </div>
                <div className="card-section">
                    {offerCardLists.map((card, index) => (
                        <a className="image-link" href={card.imageUrl} key={index} target="_blank">
                            <img src={card.image} alt={card.title} />
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Offers;