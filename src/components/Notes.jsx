import React from "react";

const Notes = () => {
  return (
    <>
      <section className="py-5">
        <div className="container border-bottom border-1 border-danger pb-3">
          <div className="row">
            <div className="col mx-auto">
              <p className="text-justify">
                <span className="text-uppercase fw-bold">note 1:</span>
                Given the extraordinary times due to the Covid-19 pandemic, and
                our commitment to the well-being of all participants, this year
                EFMA has taken the decision for the annual meeting to be an
                online conference.
              </p>
              <p className="text-justify">
                <span className="text-uppercase fw-bold">note 2:</span> EFMA
                will take place online using the Pathable virtual conference
                platform. Along with hosting the conference sessions, Pathable
                also allows attendees to make use of a customisable agenda,
                browse speaker profiles, engage with other delegates and catch
                up on missed sessions “on-demand”
              </p>
              <p>
                <span className="text-uppercase fw-bold">note 3:</span>
                Notifications on behalf of EFMA:
              </p>
              <p className="fst-italic text-justify">
                1. The EFMA 2021 Conference, as it has been already announced on
                its website (www.efmaefm.org), will take place in a “virtual”
                environment and will be presented and recorded via the secure
                Pathable event platform hired by University of Leeds with the
                EFMA approval. Their privacy notice can be found at:
                https://pathable.com/privacy-policy/. We will forward details of
                how to access Pathable nearer to the event.
              </p>
              <p className="fst-italic text-justify">
                2. EFMA2021 registered delegates are responsible for ensuring
                that they have all necessary rights to allow any material or
                performance they contribute to the EFMA conference (whether
                through the virtual event platform within sessions, via platform
                chat, file-sharing functions, or otherwise) to be used by the
                EFMA and other delegates as described below. Owners and authors
                of third party material should be appropriately attributed.
                Delegates may use others’ contributed material and performance
                only for participating in the EFMA Conference 2021. Delegates
                specifically may not download, record or otherwise take images
                of or copy others’ contributed material or performances, unless
                permitted by the rights owner. Neither the University of Leeds
                nor EFMA will be liable for any infringement of rights by
                delegates or others.
              </p>
              <p className="fst-italic text-justify">
                3.EFMA may take images of online presentations and post papers
                presented at the conference on the EFMA website in accord with
                its 30 year policy. All such activity shall be the sole
                responsibility of EFMA and not the University of Leeds.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Notes;
