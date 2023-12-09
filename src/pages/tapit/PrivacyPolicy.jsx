import PrivacyPolicyPdf from "../../assets/tapit/privacy_policy.pdf";
import useWindowDimensions from "../../utils/useWindowsDimensions.js";

const PrivacyPolicy = () => {

    const { height, width } = useWindowDimensions();

    return (
        <div>
            <iframe src={PrivacyPolicyPdf} width={width} height={height} />
        </div>
    );
};

export default PrivacyPolicy;