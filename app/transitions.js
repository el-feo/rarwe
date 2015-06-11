export default function () {
  this.transition(
    this.fromRoute('band.songs'),
    this.toRoute('band.details'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
  this.transition(
    this.hasClass('band-description'),
    this.toValue(true),
    this.use('fade', { duration: 250 })
  );
}
