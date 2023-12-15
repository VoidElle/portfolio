import styled from "styled-components";

const Wrapper = styled.section`
    margin: 0 15% 0 15%;
`;

const Section = styled.section`
    margin: 5% 0 5% 0;
`;

const List = styled.ul`
    list-style-type: circle;
    margin-left: 5%;
`;

const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
`;

const SectionTitle = styled.h2`
    font-size: 24px;
    font-weight: bold;
`;

const SubSectionTitle = styled.h3`
    font-size: 16px;
    font-weight: bold;
`;

const CookiePolicy = () => {
    return (
        <Wrapper>


            <Section>
                <Title>Cookie Policy of TapIt</Title><br/>
                <p>This document informs Users about the technologies that help this Application to achieve the
                    purposes described below. Such technologies allow the Owner to access and store information
                    (for example by using a Cookie) or use resources (for example by running a script) on a User’s
                    device as they interact with this Application.
                    For simplicity, all such technologies are defined as "Trackers" within this document – unless there
                    is a reason to differentiate.
                    For example, while Cookies can be used on both web and mobile browsers, it would be
                    inaccurate to talk about Cookies in the context of mobile apps as they are a browser-based
                    Tracker. For this reason, within this document, the term Cookies is only used where it is
                    specifically meant to indicate that particular type of Tracker.
                    Some of the purposes for which Trackers are used may also require the User's consent.
                    Whenever consent is given, it can be freely withdrawn at any time following the instructions
                    provided in this document.
                    This Application uses Trackers managed directly by the Owner (so-called “first-party” Trackers)
                    and Trackers that enable services provided by a third-party (so-called “third-party” Trackers).
                    Unless otherwise specified within this document, third-party providers may access the Trackers
                    managed by them.
                    The validity and expiration periods of Cookies and other similar Trackers may vary depending on
                    the lifetime set by the Owner or the relevant provider. Some of them expire upon termination of
                    the User’s browsing session.
                    In addition to what’s specified in the descriptions within each of the categories below, Users may
                    find more precise and updated information regarding lifetime specification as well as any other
                    relevant information — such as the presence of other Trackers — in the linked privacy policies of
                    the respective third-party providers or by contacting the Owner</p><br/>
            </Section>

            <Section>
                <SectionTitle>Activities strictly necessary for the operation of this Application and delivery of the Service</SectionTitle>
                <p>This Application uses so-called “technical” Cookies and other similar Trackers to carry out
                    activities that are strictly necessary for the operation or delivery of the Service.</p>
            </Section>

            <Section>
                <SectionTitle>Other activities involving the use of Trackers</SectionTitle>
                <SubSectionTitle>Measurement</SubSectionTitle>
                <p>This Application uses Trackers to measure traffic and analyze User behavior to improve the
                    Service.</p>
                <SubSectionTitle>Analytics</SubSectionTitle>
            </Section>

            <Section>
                <SectionTitle>How to manage preferences and provide or withdraw consent</SectionTitle>
                <p>There are various ways to manage Tracker related preferences and to provide and withdraw
                    consent, where relevant:
                    Users can manage preferences related to Trackers from directly within their own device settings,
                    for example, by preventing the use or storage of Trackers.
                    Additionally, whenever the use of Trackers is based on consent, Users can provide or withdraw
                    such consent by setting their preferences within the cookie notice or by updating such
                    preferences accordingly via the relevant consent-preferences privacy widget, if available.
                    It is also possible, via relevant browser or device features, to delete previously stored Trackers,
                    including those used to remember the User’s initial consent preferences.
                    Other Trackers in the browser’s local memory may be cleared by deleting the browsing history.
                    With regard to any third-party Trackers, Users can manage their preferences via the related
                    opt-out link (where provided), by using the means indicated in the third party's privacy policy, or
                    by contacting the third party.</p>
            </Section>

            <Section>
                <SubSectionTitle>Locating Tracker Settings</SubSectionTitle>
                <p>Users can, for example, find information about how to manage Cookies in the most commonly
                    used browsers at the following addresses:</p>
                <List>
                    <li>
                        <a href={"https://support.google.com/chrome/answer/95647?hl=en&p=cpn_cookies"} target="_blank">Google Chrome</a>
                    </li>
                    <li>
                        <a href={"https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US"} target="_blank">Mozilla Firefox</a>
                    </li>
                    <li>
                        <a href={"https://support.apple.com/it-it/guide/safari/sfri11471/mac"} target="_blank">Apple Safari</a>
                    </li>
                    <li>
                        <a href={"https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d"} target="_blank">Microsoft Internet Explorer</a>
                    </li>
                    <li>
                        <a href={"https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"} target="_blank">Microsoft Edge</a>
                    </li>
                    <li>
                        <a href={"https://support.brave.com/hc/en-us/articles/360022806212-How-do-I-use-Shields-while-browsing"} target="_blank">Brave</a>
                    </li>
                    <li>
                        <a href={"https://help.opera.com/en/latest/web-preferences/#cookies"} target="_blank">Opera</a>
                    </li>
                </List>
                <p>Users may also manage certain categories of Trackers used on mobile apps by opting out
                    through relevant device settings such as the device advertising settings for mobile devices, or
                    tracking settings in general (Users may open the device settings and look for the relevant
                    setting).</p>
            </Section>

            <Section>
                <SubSectionTitle>Consequences of denying the use of Trackers</SubSectionTitle>
                <p>Users are free to decide whether or not to allow the use of Trackers. However, please note that
                    Trackers help this Application to provide a better experience and advanced functionalities to
                    Users (in line with the purposes outlined in this document). Therefore, if the User chooses to
                    block the use of Trackers, the Owner may be unable to provide related features</p>
            </Section>

            <Section>
                <SectionTitle>Owner and Data Controller</SectionTitle>
                <p>Luca Del Corona, Livorno LI, Italy</p>
                <p><b>Owner contact email:</b><a href={"mailto:lucadelc@gmail.com"}>lucadelc@gmail.com</a></p>
                <p>Since the use of third-party Trackers through this Application cannot be fully controlled by the
                    Owner, any specific references to third-party Trackers are to be considered indicative. In order to
                    obtain complete information, Users are kindly requested to consult the privacy policies of the
                    respective third-party services listed in this document.
                    Given the objective complexity surrounding tracking technologies, Users are encouraged to
                    contact the Owner should they wish to receive any further information on the use of such
                    technologies by this Application.
                </p>
            </Section>

            <Section>
                <SectionTitle>Definitions and legal references</SectionTitle>

                <SubSectionTitle>Personal Data (or Data)</SubSectionTitle>
                <p>Any information that directly, indirectly, or in connection with other information — including a
                    personal
                    identification number — allows for the identification or identifiability of a natural person.</p>
            </Section>

            <Section>
                <SubSectionTitle>Usage Data</SubSectionTitle>
                <p>Information collected automatically through this Application (or third-party services employed in
                    this
                    Application), which can include: the IP addresses or domain names of the computers utilized by the
                    Users who use this Application, the URI addresses (Uniform Resource Identifier), the time of the
                    request, the method utilized to submit the request to the server, the size of the file received in
                    response, the numerical code indicating the status of the server's answer (successful outcome,
                    error,
                    etc.), the country of origin, the features of the browser and the operating system utilized by the
                    User,
                    the various time details per visit (e.g., the time spent on each page within the Application) and
                    the
                    details about the path followed within the Application with special reference to the sequence of
                    pages
                    visited, and other parameters about the device operating system and/or the User's IT
                    environment.</p>
            </Section>

            <Section>
                <SubSectionTitle>User</SubSectionTitle>
                <p>The individual using this Application who, unless otherwise specified, coincides with the Data
                    Subject.</p>
            </Section>

            <Section>
                <SubSectionTitle>Data Subject</SubSectionTitle>
                <p>The natural person to whom the Personal Data refers.</p>
            </Section>

            <Section>
                <SubSectionTitle>Data Processor (or Processor)</SubSectionTitle>
                <p>The natural or legal person, public authority, agency or other body which processes Personal Data on
                    behalf of the Controller, as described in this privacy policy.</p>
            </Section>
            <Section>
                <SubSectionTitle>Data Controller (or Owner)</SubSectionTitle>
                <p>The natural or legal person, public authority, agency or other body which, alone or jointly with
                    others,
                    determines the purposes and means of the processing of Personal Data, including the security
                    measures concerning the operation and use of this Application. The Data Controller, unless otherwise
                    specified, is the Owner of this Application</p>

            </Section>

            <Section>
                <SubSectionTitle>This Application</SubSectionTitle>
                <p>The means by which the Personal Data of the User is collected and processed.</p>
            </Section>

            <Section>
                <SubSectionTitle>Service</SubSectionTitle>
                <p>The service provided by this Application as described in the relative terms (if available) and on
                    this
                    site/application.</p>
            </Section>

            <Section>
                <SubSectionTitle>European Union (or EU)</SubSectionTitle>
                <p>Unless otherwise specified, all references made within this document to the European Union include
                    all current member states to the European Union and the European Economic Area.</p>
            </Section>

            <Section>
                <SubSectionTitle>Cookie</SubSectionTitle>
                <p>Cookies are Trackers consisting of small sets of data stored in the User's browser.</p>
            </Section>

            <Section>
                <SubSectionTitle>Tracker</SubSectionTitle>
                <p>Tracker indicates any technology - e.g Cookies, unique identifiers, web beacons, embedded scripts,
                    e-tags and fingerprinting - that enables the tracking of Users, for example by accessing or storing
                    information on the User’s device.</p>
            </Section>

            <Section>
                <SubSectionTitle>Legal information</SubSectionTitle>
                <p>This privacy policy relates solely to this Application, if not stated otherwise within this document.
                    <br/>Latest update: December 09, 2023</p>
            </Section>

        </Wrapper>
    );
};

export default CookiePolicy;