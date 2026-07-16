import type { Partner } from "../data/partners";

type PartnerLogoProps = {
  partner: Partner;
};

function PartnerArtwork({ partner }: PartnerLogoProps) {
  if (partner.treatment === "griphcon") {
    return (
      <span className="griphcon-lockup" aria-hidden="true">
        <img
          className="griphcon-lockup__mark"
          src={partner.logo}
          alt=""
          width={partner.width}
          height={partner.height}
          loading="lazy"
        />
        <span className="griphcon-lockup__wordmark">
          <span className="griphcon-lockup__name">GRIPHCON</span>
          <span className="griphcon-lockup__descriptor">TECHNOLOGIES</span>
        </span>
      </span>
    );
  }

  return (
    <img
      src={partner.logo}
      alt=""
      width={partner.width}
      height={partner.height}
      loading="lazy"
      aria-hidden="true"
    />
  );
}

export function PartnerLogo({ partner }: PartnerLogoProps) {
  const className = `partner-logo partner-logo--${partner.treatment}`;
  const artwork = <PartnerArtwork partner={partner} />;

  if (partner.href) {
    return (
      <a
        className={className}
        href={partner.href}
        target="_blank"
        rel="noreferrer"
        role="listitem"
        aria-label={`Visit ${partner.name}`}
      >
        {artwork}
      </a>
    );
  }

  return (
    <div
      className={className}
      role="listitem"
      aria-label={`${partner.name}; production website pending`}
    >
      {artwork}
    </div>
  );
}
