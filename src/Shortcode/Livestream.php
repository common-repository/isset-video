<?php


namespace IssetBV\VideoPublisher\Wordpress\Shortcode;

use IssetBV\VideoPublisher\Wordpress\Renderer;

class Livestream extends ShortcodeBase {
	const CODE = 'isset-livestream';

	function generate( $params, $content = null ) {
		$attr = shortcode_atts(
			array(
				'uuid'    => false,
				'post_id' => false,
			),
			$params
		);

		$uuid = $attr['uuid'];

		$publishService = $this->plugin->getVideoPublisherService();
		$details        = $publishService->getLivestreamDetails( $uuid );

		if ( ! $details ) {
			return Renderer::render( 'shortcode/livestream-invalid.php' );
		}

		// If the livestream has a publish, show the publish player instead
		if ( ! empty( $details['publish'] ) ) {
			$publishShortcode = new Publish( $this->plugin );
			return $publishShortcode->generate( array( 'uuid' => $details['publish'] ) );
		}

		$context = array(
			'uuid'            => $uuid,
			'livestreamKey'   => $details['livestream_key'],
			'socket'          => $this->getSocketUrl( $uuid ),
			'started'         => $details['date_started'] !== null,
			'ended'           => $details['date_ended'] !== null,
			'myIssetVideoUrl' => $this->plugin->getVideoPublisherService()->getMyIssetVideoURL(),
		);

		$context = array_merge( $context, $attr );
		return Renderer::render( 'shortcode/livestream.php', $context );
	}

	function getSocketUrl( $uuid ) {
		$publishService = $this->plugin->getVideoPublisherService();
		$mercureUrl     = $publishService->getMercureURL();

		return "{$mercureUrl}?topic=" . urlencode( "https://isset.video/livestreams/{$uuid}" );
	}
}
