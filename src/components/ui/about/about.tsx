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
              <b>Access &amp; Authentication</b><br/>
              I streamline logins while hardening security by delivering SSO and adaptive MFA with PingFederate and Okta, leveraging SAML, OAuth 2.0, OIDC, and FIDO2. Privileged accounts stay protected with CyberArk and Thycotic through automated discovery, vaulting, password rotation, and session recording.
            </div>
            <div>
              <b>Governance &amp; Compliance</b><br/>
              On the identity-governance side, I lead SailPoint IdentityIQ certification campaigns, role mining, and joiner-mover-leaver workflows, maintaining continuous alignment with SOX, HIPAA, and GDPR.
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
                navigator.clipboard.writeText("saif.rahman.va@gmail.com");
              }}
              className="text-2xl lg:text-3xl cursor-pointer"
            >
              <b>saif.rahman.va@gmail.com</b>
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
                href="https://leetcode.com/u/saifur-rahman/"
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
