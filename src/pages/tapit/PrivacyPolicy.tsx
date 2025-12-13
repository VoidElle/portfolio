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
    padding-top: 16px;
`;

const PrivacyPolicy = () => {
    return (
        <Wrapper>


            <Section>
                <Title>Privacy Policy of TapIt</Title><br/>
                <p>This Application collects some Personal Data from its Users.
                    This document can be printed for reference by using the print command in the settings of any
                    browser.</p><br/>
            </Section>

            <Section>
                <SectionTitle>POLICY SUMMARY</SectionTitle>
                <SectionTitle>Personal Data processed for the following purposes and using the following services:</SectionTitle>
                <SectionTitle>Analytics</SectionTitle>
                <List>
                    <li><b>Google Analytics (Universal Analytics)</b></li>
                    <li>Personal Data: Trackers; Usage Data</li>
                </List>
                <SectionTitle>Analytics</SectionTitle>
                <List>
                    <li><b>AdMob</b></li>
                    <li>Personal Data: IP Address, Usage Data, Performance Data, Device
                        Identifier, Advertising data</li>
                </List>
            </Section>

            <Section>
            <SectionTitle>Contact information</SectionTitle>
                <SubSectionTitle>Owner and Data Controller</SubSectionTitle>
                <p>Luca Del Corona, Livorno LI, Italy</p>
                <p>Owner contact email: <a href={"mailto:lucadelc@gmail.com"}>lucadelc@gmail.com</a></p>
            </Section>

            <Section>
                <SectionTitle>FULL POLICY</SectionTitle>
                <SectionTitle>Owner and Data Controller</SectionTitle>
                <p>Luca Del Corona, Livorno LI, Italy</p>
                <p>Owner contact email: <a href={"mailto:lucadelc@gmail.com"}>lucadelc@gmail.com</a></p>
            </Section>

            <Section>
                <SubSectionTitle>Types of Data collected</SubSectionTitle>
                <p>Among the types of Personal Data that this Application collects, by itself or through third parties, there
                    are: Trackers; Usage Data.
                    Complete details on each type of Personal Data collected are provided in the dedicated sections of
                    this privacy policy or by specific explanation texts displayed prior to the Data collection.
                    Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically
                    when using this Application.
                    Unless specified otherwise, all Data requested by this Application is mandatory and failure to provide
                    this Data may make it impossible for this Application to provide its services. In cases where this
                    Application specifically states that some Data is not mandatory, Users are free not to communicate
                    this Data without consequences to the availability or the functioning of the Service.
                    Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner.
                    Any use of Cookies – or of other tracking tools — by this Application or by the owners of third-party
                    services used by this Application serves the purpose of providing the Service required by the User, in
                    addition to any other purposes described in the present document and in the Cookie Policy.
                    Users are responsible for any third-party Personal Data obtained, published or shared through this
                    Application.</p>
            </Section>

            <Section>
                <SectionTitle>Mode and place of processing the Data</SectionTitle>
                <SubSectionTitle>Methods of processing</SubSectionTitle>
                <p>The Owner takes appropriate security measures to prevent unauthorized access, disclosure,
                    modification, or unauthorized destruction of the Data.
                    The Data processing is carried out using computers and/or IT enabled tools, following organizational
                    procedures and modes strictly related to the purposes indicated. In addition to the Owner, in some
                    cases, the Data may be accessible to certain types of persons in charge, involved with the operation
                    of this Application (administration, sales, marketing, legal, system administration) or external parties
                    (such as third-party technical service providers, mail carriers, hosting providers, IT companies,
                    communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated
                    list of these parties may be requested from the Owner at any time.</p>
            </Section>

            <Section>
                <SubSectionTitle>Place</SubSectionTitle>
                <p>The Data is processed at the Owner's operating offices and in any other places where the parties
                    involved in the processing are located.
                </p><br /> <br />
                <p>Depending on the User's location, data transfers may involve transferring the User's Data to a country
                    other than their own. To find out more about the place of processing of such transferred Data, Users
                    can check the section containing details about the processing of Personal Data.
                </p>
            </Section>

            <Section>
                <SubSectionTitle>Retention time</SubSectionTitle>
                <p>Unless specified otherwise in this document, Personal Data shall be processed and stored for as long
                    as required by the purpose they have been collected for and may be retained for longer due to
                    applicable legal obligation or based on the Users’ consent.</p>
            </Section>

            <Section>
                <SectionTitle>The purposes of processing</SectionTitle>
                <p>The Data concerning the User is collected to allow the Owner to provide its Service, comply with its
                    legal obligations, respond to enforcement requests, protect its rights and interests (or those of its
                    Users or third parties), detect any malicious or fraudulent activity, as well as the following: Analytics.
                    For specific information about the Personal Data used for each purpose, the User may refer to the
                    section “Detailed information on the processing of Personal Data”.</p>
            </Section>

            <Section>
                <SectionTitle>Detailed information on the processing of Personal Data</SectionTitle>
                <p>Personal Data is collected for the following purposes and using the following services:</p>
                <SubSectionTitle>Analytics</SubSectionTitle>
                <p>The services contained in this section enable the Owner to monitor and analyze web traffic
                    and can be used to keep track of User behavior.
                    Google Analytics (Universal Analytics) (Google Ireland Limited)
                    Google Analytics (Universal Analytics) is a web analysis service provided by Google Ireland
                    Limited (“Google”). Google utilizes the Data collected to track and examine the use of this
                    Application, to prepare reports on its activities and share them with other Google services.
                    Google may use the Data collected to contextualize and personalize the ads of its own
                    advertising network.
                    Personal Data processed: Trackers; Usage Data.
                    Place of processing: Ireland – <a href={"https://policies.google.com/privacy"} target="_blank">Privacy Policy</a> – <a href={"https://tools.google.com/dlpage/gaoptout?hl=en"} target="_blank">Opt Out.</a>
                </p>
            </Section>

            <Section>
                <SectionTitle>Opt-out of marketing emails and other direct marketing.</SectionTitle>
                <p>You may opt-out of receiving promotional communications, such as marketing emails from us by
                    following the instructions in such communications.
                </p>
            </Section>

            <Section>
                <SectionTitle>Opt-out of targeted advertising</SectionTitle>
                <p>You can opt-out of interest-based advertising on mobile applications by checking the privacy settings
                    of your Android or iOS device and selecting “limit ad tracking” (Apple iOS) or “opt-out of interest based
                    ads” (Android)</p>
            </Section>

            <Section>
                <SectionTitle>Cookie Policy</SectionTitle>
                <p>This Application uses Trackers. To learn more, Users may consult the <a href={"https://www.lucadelcorona.com/tapit/cookie-policy"} target="_blank">Cookie Policy</a>.</p>
            </Section>

            <Section>
                <SectionTitle>Further Information for Users</SectionTitle>
                <SubSectionTitle>Legal basis of processing</SubSectionTitle>
                <p>The Owner may process Personal Data relating to Users if one of the following applies:</p>
                <List>
                    <li>Users have given their consent for one or more specific purposes.</li>
                    <li>provision of Data is necessary for the performance of an agreement with the User
                        and/or for any pre-contractual obligations thereof;
                    </li>
                    <li>processing is necessary for compliance with a legal obligation to which the Owner is
                        subject;
                    </li>
                    <li>processing is related to a task that is carried out in the public interest or in the exercise
                        of official authority vested in the Owner;</li>
                    <li>processing is necessary for the purposes of the legitimate interests pursued by the
                        Owner or by a third party.
                    </li>
                </List>
                <p>In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing,
                    and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a
                    requirement necessary to enter into a contract</p>
            </Section>

            <Section>
                <SubSectionTitle>Further information about retention time</SubSectionTitle>
                <p>Unless specified otherwise in this document, Personal Data shall be processed and stored for as long
                    as required by the purpose they have been collected for and may be retained for longer due to
                    applicable legal obligation or based on the Users’ consent.<br /><br />
                    Therefore:
                </p>
                <List>
                    <li> Personal Data collected for purposes related to the performance of a contract between
                        the Owner and the User shall be retained until such contract has been fully performed.
                    </li>
                    <li>Personal Data collected for the purposes of the Owner’s legitimate interests shall be
                        retained as long as needed to fulfill such purposes. Users may find specific information
                        regarding the legitimate interests pursued by the Owner within the relevant sections of
                        this document or by contacting the Owner.</li>
                </List>
                <p>
                    The Owner may be allowed to retain Personal Data for a longer period whenever the User has given
                    consent to such processing, as long as such consent is not withdrawn. Furthermore, the Owner may
                    be obliged to retain Personal Data for a longer period whenever required to fulfil a legal obligation or
                    upon order of an authority.
                </p>
                <br />
                <p>Once the retention period expires, Personal Data shall be deleted. Therefore, the right of access, the
                    right to erasure, the right to rectification and the right to data portability cannot be enforced after
                    expiration of the retention period.
                </p>
            </Section>

            <Section>
                <SubSectionTitle>The rights of Users based on the General Data Protection Regulation (GDPR)</SubSectionTitle>
                <p>Users may exercise certain rights regarding their Data processed by the Owner.</p><br />
                <p>In particular, Users have the right to do the following, to the extent permitted by law:</p>
                <List>
                    <li><b>Withdraw their consent at any time.</b> Users have the right to withdraw consent where
                        they have previously given their consent to the processing of their Personal Data.
                    </li>
                    <li><b>Object to processing of their Data.</b>  Users have the right to object to the processing of
                        their Data if the processing is carried out on a legal basis other than consent.
                    </li>
                    <li><b>Access their Data.</b> Users have the right to learn if Data is being processed by the Owner,
                        obtain disclosure regarding certain aspects of the processing and obtain a copy of the
                        Data undergoing processing.
                    </li>
                    <li><b>Verify and seek rectification.</b> Users have the right to verify the accuracy of their Data
                        and ask for it to be updated or corrected.
                    </li>
                    <li><b>Restrict the processing of their Data.</b> Users have the right to restrict the processing of
                        their Data. In this case, the Owner will not process their Data for any purpose other than
                        storing it.
                    </li>
                    <li><b>Have their Personal Data deleted or otherwise removed.</b> Users have the right to obtain
                        the erasure of their Data from the Owner.
                    </li>
                    <li><b>Receive their Data and have it transferred to another controller.</b> Users have the right to
                        receive their Data in a structured, commonly used and machine readable format and, if
                        technically feasible, to have it transmitted to another controller without any hindrance.
                    </li>
                    <li><b>Lodge a complaint</b>  Users have the right to bring a claim before their competent data
                        protection authority.
                    </li>
                </List>
                <p>Users are also entitled to learn about the legal basis for Data transfers abroad including to any
                    international organization governed by public international law or set up by two or more countries,
                    such as the UN, and about the security measures taken by the Owner to safeguard their Data.</p>
            </Section>

            <Section>
                <p>Details about the right to object to processing
                    Where Personal Data is processed for a public interest, in the exercise of an official authority vested
                    in the Owner or for the purposes of the legitimate interests pursued by the Owner, Users may object
                    to such processing by providing a ground related to their particular situation to justify the objection.
                    Users must know that, however, should their Personal Data be processed for direct marketing
                    purposes, they can object to that processing at any time, free of charge and without providing any
                    justification. Where the User objects to processing for direct marketing purposes, the Personal Data
                    will no longer be processed for such purposes. To learn whether the Owner is processing Personal
                    Data for direct marketing purposes, Users may refer to the relevant sections of this document.</p>
            </Section>

            <Section>
                <SubSectionTitle>How to exercise these rights</SubSectionTitle>
                <p>Any requests to exercise User rights can be directed to the Owner through the contact details provided
                    in this document. Such requests are free of charge and will be answered by the Owner as early as
                    possible and always within one month, providing Users with the information required by law. Any
                    rectification or erasure of Personal Data or restriction of processing will be communicated by the
                    Owner to each recipient, if any, to whom the Personal Data has been disclosed unless this proves
                    impossible or involves disproportionate effort. At the Users’ request, the Owner will inform them about
                    those recipients.</p>
            </Section>

            <Section>
                <SectionTitle>Additional information about Data collection and processing</SectionTitle>

                <SubSectionTitle>Legal action</SubSectionTitle>
                <p>The User's Personal Data may be used for legal purposes by the Owner in Court or in the stages
                    leading to possible legal action arising from improper use of this Application or the related Services.
                    The User declares to be aware that the Owner may be required to reveal personal data upon request of
                    public authorities.</p>

                <SubSectionTitle>Additional information about User's Personal Data</SubSectionTitle>
                <p>In addition to the information contained in this privacy policy, this Application may provide the User
                    with additional and contextual information concerning particular Services or the collection and
                    processing of Personal Data upon request.
                </p>

                <SubSectionTitle>System logs and maintenance</SubSectionTitle>
                <p>For operation and maintenance purposes, this Application and any third-party services may collect
                    files that record interaction with this Application (System logs) or use other Personal Data (such as
                    the IP Address) for this purpose
                </p>

                <SubSectionTitle>Information not contained in this policy</SubSectionTitle>
                <p>More details concerning the collection or processing of Personal Data may be requested from the
                    Owner at any time. Please see the contact information at the beginning of this document.
                </p>

                <SubSectionTitle>Changes to this privacy policy</SubSectionTitle>
                <p>The Owner reserves the right to make changes to this privacy policy at any time by notifying its Users
                    on this page and possibly within this Application and/or - as far as technically and legally feasible -
                    sending a notice to Users via any contact information available to the Owner. It is strongly
                    recommended to check this page often, referring to the date of the last modification listed at the
                    bottom.
                    <br /> <br />
                    Should the changes affect processing activities performed on the basis of the User’s consent, the
                    Owner shall collect new consent from the User, where required.

                </p>

            </Section>

            <Section>
                <SubSectionTitle>Definitions and legal references</SubSectionTitle>

                <SubSectionTitle>Personal Data (or Data)</SubSectionTitle>
                <p>Any information that directly, indirectly, or in connection with other information — including a personal
                    identification number — allows for the identification or identifiability of a natural person.</p>

                <SubSectionTitle>Usage Data</SubSectionTitle>
                <p>Information collected automatically through this Application (or third-party services employed in this
                    Application), which can include: the IP addresses or domain names of the computers utilized by the
                    Users who use this Application, the URI addresses (Uniform Resource Identifier), the time of the
                    request, the method utilized to submit the request to the server, the size of the file received in
                    response, the numerical code indicating the status of the server's answer (successful outcome, error,
                    etc.), the country of origin, the features of the browser and the operating system utilized by the User,
                    the various time details per visit (e.g., the time spent on each page within the Application) and the
                    details about the path followed within the Application with special reference to the sequence of pages
                    visited, and other parameters about the device operating system and/or the User's IT environment.
                </p>

                <SubSectionTitle>User</SubSectionTitle>
                <p>The individual using this Application who, unless otherwise specified, coincides with the Data Subject.</p>

                <SubSectionTitle>Data Subject</SubSectionTitle>
                <p>The natural person to whom the Personal Data refers.</p>

                <SubSectionTitle>Data Processor (or Processor)</SubSectionTitle>
                <p>The natural or legal person, public authority, agency or other body which processes Personal Data on
                    behalf of the Controller, as described in this privacy policy.
                </p>

                <SubSectionTitle>Data Controller (or Owner)</SubSectionTitle>
                <p>The natural or legal person, public authority, agency or other body which, alone or jointly with others,
                    determines the purposes and means of the processing of Personal Data, including the security
                    measures concerning the operation and use of this Application. The Data Controller, unless otherwise
                    specified, is the Owner of this Application.</p>

                <SubSectionTitle>This Application</SubSectionTitle>
                <p>The means by which the Personal Data of the User is collected and processed</p>

                <SubSectionTitle>Service</SubSectionTitle>
                <p>The service provided by this Application as described in the relative terms (if available) and on this
                    site/application.</p>

                <SubSectionTitle>European Union (or EU)
                </SubSectionTitle>
                <p>Unless otherwise specified, all references made within this document to the European Union include
                    all current member states to the European Union and the European Economic Area.
                </p>

                <SubSectionTitle>Cookie</SubSectionTitle>
                <p>Cookies are Trackers consisting of small sets of data stored in the User's browser.
                </p>

                <SubSectionTitle>Tracker</SubSectionTitle>
                <p>Tracker indicates any technology - e.g Cookies, unique identifiers, web beacons, embedded scripts,
                    e-tags and fingerprinting - that enables the tracking of Users, for example by accessing or storing
                    information on the User’s device.</p>

                <SubSectionTitle>Legal information
                </SubSectionTitle>
                <p>This privacy policy relates solely to this Application, if not stated otherwise within this document.
                    <br />Latest update: December 09, 2023</p>

            </Section>

        </Wrapper>
    );
};

export default PrivacyPolicy;