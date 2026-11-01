"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BROKERAGE } from "@/lib/listings";

type Props = { name: string; photo: string; title?: string; label?: string; defaultMessage?: string; className?: string };

/** "Send a Message" button that opens a modal form addressed to one agent.
 *  TODO (live site): POST to an API route that emails the agent and CCs the broker. */
export default function MessageAgent({ name, photo, title, label = "Send a Message", defaultMessage, className = "btn" }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const [sent, setSent] = useState(false);
  const first = name.split(/[ ,]/)[0];
  const open = () => { setSent(false); ref.current?.showModal(); };
  const close = () => ref.current?.close();

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const onClick = (e: MouseEvent) => { if (e.target === d) d.close(); }; // click backdrop to close
    d.addEventListener("click", onClick);
    return () => d.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <button type="button" className={className} onClick={open}>{label}</button>
      <dialog ref={ref} className="msg-dialog" aria-labelledby={`msg-${first}`}>
        <div className="msg-head">
          <h2 id={`msg-${first}`}>Send a Message</h2>
          <button type="button" className="msg-x" onClick={close} aria-label="Close">×</button>
        </div>
        {sent ? (
          <div className="msg-body msg-sent">
            <Image src={photo} alt="" width={72} height={72} className="msg-photo" />
            <h3>Thanks! Your message is on its way to {first}.</h3>
            <p>This preview doesn&apos;t send messages yet. On the live site, {first} will get it by email and reply soon.</p>
            <button type="button" className="btn" onClick={close}>Close</button>
          </div>
        ) : (
          <form className="msg-body" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <div className="msg-agent">
              <Image src={photo} alt="" width={84} height={84} className="msg-photo" />
              <div>
                <span className="msg-name">{name}</span>
                <span className="msg-org">{title ? `${title} · ` : ""}{BROKERAGE.name}</span>
              </div>
            </div>
            <div className="field"><label htmlFor={`mn-${first}`}>Full name</label><input id={`mn-${first}`} required autoComplete="name" placeholder="Full name" /></div>
            <div className="field"><label htmlFor={`me-${first}`}>Email address</label><input id={`me-${first}`} type="email" required autoComplete="email" placeholder="Email address" /></div>
            <div className="field"><label htmlFor={`mp-${first}`}>Phone number</label><input id={`mp-${first}`} type="tel" autoComplete="tel" placeholder="(###) ###-####" /></div>
            <div className="field"><label htmlFor={`mm-${first}`}>Message</label><textarea id={`mm-${first}`} rows={3} defaultValue={defaultMessage ?? `${first}, I'd like to learn more about your real estate services.`} /></div>
            <p className="msg-consent">By sending your message, you agree that {BROKERAGE.name} may call or text you about your inquiry at the number you provided. Consent is not a condition of buying any property, goods or services. Message and data rates may apply.</p>
            <button type="submit" className="btn msg-send">Send a Message</button>
          </form>
        )}
      </dialog>
    </>
  );
}
