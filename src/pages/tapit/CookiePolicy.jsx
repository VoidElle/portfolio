import CookiePolicyPdf from "../../assets/tapit/cookie_policy.pdf";
import useWindowDimensions from "../../utils/useWindowsDimensions.js";

const CookiePolicy = () => {

    const { height, width } = useWindowDimensions();

    return (
        <div>
            <iframe src={CookiePolicyPdf} width={width} height={height} />
        </div>
    );
};

export default CookiePolicy;