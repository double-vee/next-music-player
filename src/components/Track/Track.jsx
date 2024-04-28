import Image from 'next/image';

export default function Track() {
  return (
    <div className="track-wrapper">
      <div className="image-wrapper">
        <Image
          src="https://freemusicarchive.org/image?file=images%2Falbums%2FFields_Ohio_-_H_I_N_T_E_R_L_A_N_D_-_2015102170051180.jpg&width=290&height=290&type=image"
          alt=""
          width={200}
          height={200}
        />
      </div>
      <h2>Urban Coyote</h2>
      <h3>Fields Ohio</h3>
    </div>
  );
}
