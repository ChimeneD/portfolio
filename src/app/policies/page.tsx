import React from "react";
import Layout from "@/components/layout";

const pageClass =
  "mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-28 sm:px-6 lg:px-8";
const headingClass =
  "mt-12 text-center text-[clamp(2rem,5vw,3.2rem)] font-black leading-tight text-text first:mt-0";
const introClass = "mx-auto mt-4 max-w-3xl text-center text-text-alt";
const listClass =
  "my-8 flex flex-col items-start justify-start gap-6 p-12 rounded-none border border-border bg-card/75 p-6 text-text-alt shadow-[var(--shadow-soft)] backdrop-blur-xl";
const nestedListClass =
  "ml-4 mt-2 flex list-disc flex-col items-start justify-start gap-1 marker:text-primary";
const itemClass =
  "list-[lower-alpha] [&_h5]:font-bold [&_h5]:text-text [&_h6]:font-semibold [&_h6]:text-text";

const TermsPage = () => {
  return (
    <Layout>
      <div className={pageClass} data-reveal="stagger-group">
        <h2 className={headingClass} data-stagger-item>
          Refund Policy
        </h2>
        <h5 className={introClass} data-stagger-item>
          Due to the nature of digital services and time-based billing, refunds
          will be handled under the following conditions:
        </h5>
        <ul className={listClass} data-stagger-item>
          <li className={itemClass}>
            <h5>Refund Eligibility:</h5>
            <h6>Refunds may be issued under these circumstances:</h6>
            <ul className={nestedListClass}>
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
          <li className={itemClass}>
            <h5>Non-Refundable Situations:</h5>
            <ul className={nestedListClass}>
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
          <li className={itemClass}>
            <h5>Refund Process:</h5>
            All eligible refunds will be processed within 7–14 business days
            using the same payment method used during the purchase.
          </li>
        </ul>

        <h2 className={headingClass} data-stagger-item>
          Cancellation Policy
        </h2>
        <ul className={listClass} data-stagger-item>
          <li className={itemClass}>
            <h5>Project Cancellation by Client:</h5>
            <ul className={nestedListClass}>
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
          <li className={itemClass}>
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
