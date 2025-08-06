import { Tooltip } from "react-tooltip";

import { Highlight } from "../highlight/highlight-text";
import MotionDiv from "../motion-div";

export default function About() {
  return (
    <div className="transition-all min-h-screen flex flex-col gap-20 justify-center items-center dark:text-white p-12">
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-col items-center">
          <MotionDiv delay={0.2}>
            <h2 className="text-4xl font-medium dark:text-white">About Me</h2>
          </MotionDiv>
        </div>
        <MotionDiv delay={0.3}>
          <div className="text-center font-regular text-xl lg:text-2xl w-3/4 lg:w-1/2 flex flex-col gap-6">
            <div>
              I'm Saif-Ur Rahman, an Identity &amp; Access Management engineer who turns messy, manual processes into one-click experiences.
            </div>
            <div>
              <b>Access &amp; Authentication</b><br/>
              - I deliver seamless sign-in and stronger security by designing SSO and adaptive MFA journeys with Okta, Azure AD, and PingFederate—leveraging SAML 2.0, OAuth 2.0, OIDC, and FIDO2.
            </div>
            <div>
              - I've automated privileged-account discovery, vaulting, rotation, and session recording with CyberArk, Thycotic Secret Server, and AWS IAM to safeguard high-risk credentials.
            </div>
            <div>
              <b>Governance &amp; Compliance</b><br/>
              - I've led Fortune-500 SailPoint IdentityIQ/IdentityNow rollouts for 400 k+ users—cutting onboarding from two days to 30 minutes and trimming manual access reviews by 30 %.
            </div>
            <div>
              - I build end-to-end joiner-mover-leaver automation, role mining, and quarterly certification campaigns that keep SOX, HIPAA, and GDPR audits painless.
            </div>
            <div>
              - I've published hands-off Azure AD PIM onboarding flows and Okta ↔ Azure SAML federation guides so teams can adopt zero-touch identity with confidence.
            </div>
          </div>
        </MotionDiv>
      </div>
      <MotionDiv delay={0.6}>
        <div className="flex flex-col gap-1 justify-center items-center w-3/4 lg:w-1/2">
          <p className="text-xl lg:text-2xl">Get in touch:</p>
          <Tooltip className="z-20" id="email" float>
            Click to copy
          </Tooltip>
          <Highlight>
            <p
              data-tooltip-id="email"
              onClick={() => {
                navigator.clipboard.writeText("saifrahman.iam@gmail.com");
              }}
              className="text-2xl lg:text-3xl cursor-pointer"
            >
              <b>saifrahman.iam@gmail.com</b>
            </p>
          </Highlight>
          <ul className="flex gap-8 mt-3">
            <Tooltip id="githublogo" float>
              GitHub
            </Tooltip>
            <MotionDiv delay={0.7}>
              <a href="https://github.com/myfishdrowned" data-tooltip-id="githublogo">
                <li className="gitHubLogo hover:scale-[1.1] duration-700" />
              </a>
            </MotionDiv>
            <Tooltip id="linkedin" float>
              LinkedIn
            </Tooltip>
            <MotionDiv delay={0.8}>
              <a
                href="https://www.linkedin.com/in/srm19"
                data-tooltip-id="linkedin"
              >
                <li className="linkedInLogo hover:scale-[1.1] duration-700" />
              </a>
            </MotionDiv>
            <Tooltip id="leetcode" float>
              LeetCode
            </Tooltip>
            <MotionDiv delay={0.9}>
              <a
                href="https://leetcode.com/u/mahi_mahi_mahi/"
                data-tooltip-id="leetcode"
              >
                <li className="leetCodeLogo hover:scale-[1.1] duration-700" />
              </a>
            </MotionDiv>
          </ul>
        </div>
      </MotionDiv>
    </div>
  );
}
