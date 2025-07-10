import Layout from "@components/layout";
import React from "react";

const TermsPage = () => {
  return (
    <Layout>
      <div className="terms-container">
        <h2>Refund Policy</h2>
        <h5>
          Due to the nature of digital services and time-based billing, refunds
          will be handled under the following conditions:
        </h5>
        <ul>
          <li>
            <h5>Refund Eligibility:</h5>
            <h6>Refunds may be issued under these circumstances:</h6>
            <ul>
              <li>You cancel a project before any work has commenced.</li>
              <li>
                You are not satisfied with the initial deliverable and request a
                refund within 7 days of receiving the first draft, provided no
                revisions have been made.
              </li>
              <li>
                There is a technical error or failure on our end that prevents
                us from delivering the agreed service, and we are unable to
                resolve it within a reasonable time frame.
              </li>
            </ul>
          </li>
          <li>
            <h5>Non-Refundable Situations:</h5>
            <ul>
              <li>
                Refunds will not be issued for completed work or services
                already rendered and accepted.
              </li>
              <li>Change of mind after work has begun or been delivered.</li>
              <li>
                Delays caused by incomplete client input, assets, or approvals.
              </li>
            </ul>
          </li>
          <li>
            <h5>Refund Process:</h5>
            All eligible refunds will be processed within 7–14 business days
            using the same payment method used during the purchase.
          </li>
        </ul>

        <h2>Cancellation Policy</h2>
        <ul>
          <li>
            <h5>Project Cancellation by Client:</h5>
            <ul>
              <li>
                Clients may cancel a project at any time by submitting a written
                notice via email.
              </li>
              <li>If work has not yet begun, a full refund will be issued.</li>
              <li>
                If work has started, a partial refund may be issued based on the
                amount of work already completed.
              </li>
            </ul>
          </li>
          <li>
            <h5>Project Cancellation by Developer:</h5>
            <p>
              Cancellation by Developer In rare cases, I reserve the right to
              cancel a project due to unforeseen circumstances (e.g. illness,
              technical barriers). In such cases: A full or partial refund will
              be provided depending on the work completed. All completed work up
              to that point will be handed over.
            </p>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default TermsPage;
