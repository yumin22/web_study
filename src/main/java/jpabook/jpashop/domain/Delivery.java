package jpabook.jpashop.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import static jakarta.persistence.FetchType.LAZY;

@Entity
@Getter @Setter
public class Delivery {

    @Id @GeneratedValue
    @Column(name = "delivery_id")
    private Long id;

    @OneToOne(fetch = LAZY, mappedBy = "delivery")
    private Order order;                //해당 주문

    @Embedded
    private Address address;            //배송지

    @Enumerated(EnumType.STRING)
    private DeliveryStatus status;      //배송싱태 ENUM[READY, COMP(배송)]

}
